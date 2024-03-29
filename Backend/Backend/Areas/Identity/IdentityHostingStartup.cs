﻿using Backend.Areas.Identity.Data;
using Backend.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(Backend.Areas.Identity.IdentityHostingStartup))]
namespace Backend.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<BackendContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("BackendContextConnection")));

                services.AddDefaultIdentity<BackendUser>(options =>
                    {
                        options.SignIn.RequireConfirmedAccount = false;
                        options.Password.RequireDigit = false;
                        options.Password.RequiredLength = 5;
                        options.Password.RequireLowercase = false;
                        options.Password.RequireNonAlphanumeric = false;
                        options.Password.RequireUppercase = false;

                    })
                    .AddEntityFrameworkStores<BackendContext>();
            });
        }
    }
}