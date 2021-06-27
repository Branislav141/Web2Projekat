using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Microsoft.EntityFrameworkCore;
using Backend.Dtos;
using EmailService;
using Microsoft.AspNetCore.Authorization;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private readonly BackendContext _dbContext;
        private readonly IEmailSender _emailSender;

        public UsersController(BackendContext dbContext, IEmailSender emailSender)
        {
            _dbContext = dbContext;
            _emailSender = emailSender;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _dbContext.Users.ToListAsync();

            return Ok(users);
        }

        [HttpPost("approve")]
        public async Task<IActionResult> ApproveUser([FromBody] ApproveDeclineModel model)
        {
            var user = await _dbContext.Users.Where(x => x.Email == model.Email).FirstOrDefaultAsync();
            user.AccountStatus = "Approved";

            await _dbContext.SaveChangesAsync();

            var message = new Message(new string[] { user.Email }, "Your account has been approved!", 
                "This is to confirm that your account has been successfully activated. You can log in with your username and password.");
            _emailSender.SendEmail(message);

            return Ok();
        }

        [HttpPost("decline")]
        public async Task<IActionResult> DeclineUser([FromBody] ApproveDeclineModel model)
        {
            var user = await _dbContext.Users.Where(x => x.Email == model.Email).FirstOrDefaultAsync();
            user.AccountStatus = "Declined";

            await _dbContext.SaveChangesAsync();


            var message = new Message(new string[] { user.Email }, "Your account has been declined!",
                "This is to confirm that your account has been declined for access.");
            _emailSender.SendEmail(message);

            return Ok();
        }

    }
}
