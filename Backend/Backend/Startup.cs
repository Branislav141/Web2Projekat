using Backend.Areas.Identity.Data;
using Backend.Data;
using Backend.Helpers;
using EmailService;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var key = Encoding.ASCII.GetBytes("MY_BIG_SECRET_KEY_GHJDKGDSNGNDSNJKGNJDS");
            services.AddDbContext<DataContext>(x => x.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddAuthentication(a =>
            {
                a.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                a.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
                .AddJwtBearer(b =>
                {
                    b.Events = new JwtBearerEvents
                    {
                        OnTokenValidated = context =>
                        {
                            var userMachine = context.HttpContext.RequestServices.GetRequiredService<UserManager<BackendUser>>();
                            var user = userMachine.GetUserAsync(context.HttpContext.User);

                            if(user == null)
                            {
                                context.Fail("UnAuthorized");
                            }
                            return Task.CompletedTask;
                        }
                    };
                    b.RequireHttpsMetadata = false;
                    b.SaveToken = true;
                    b.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });

            var emailConfig = Configuration.GetSection("EmailConfiguration").Get<EmailConfiguration>();
            services.AddSingleton(emailConfig);
            services.AddTransient<IImageHandler, ImageHandler>();
            services.AddTransient<IImageWriter, ImageWriter>();

            services.AddScoped<IEmailSender, EmailSender>();

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseCors(x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources/Images")),

            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
