using Backend.Data;
using Backend.Helpers;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UploadController : ControllerBase
    {
        private readonly IImageHandler _imageHandler;
        private readonly DataContext _dbContext;
        private readonly BackendContext _dbUserContext;

        public UploadController(IImageHandler imageHandler, DataContext dbContext, BackendContext dbUserContext)
        {
            _imageHandler = imageHandler;
            _dbContext = dbContext;
            _dbUserContext = dbUserContext;
        }

        [HttpGet("{id}", Name = "GetPhoto")]
        public IActionResult GetPhoto(int id)
        {
            var photoFromRepo = _dbContext.Photos.Where(x => x.Id == id).FirstOrDefault();
            return Ok(photoFromRepo);
        }

        [HttpGet("delete/{id}")]
        public async Task<IActionResult> DeletePhoto(int id)
        {
            var photo = _dbContext.Photos.Where(x => x.Id == id).FirstOrDefault();

            photo.IsDeleted = true;

            await _dbContext.SaveChangesAsync();
            
            return Ok();
        }

        [HttpPost("{userId}")]
        public async Task<IActionResult> UploadImage(string userId, IFormFile file)
        {
            var user = _dbUserContext.Users.Where(x => x.Id == userId).FirstOrDefault();
            var image_location = await _imageHandler.UploadImage(file);
            var objectResult = image_location as ObjectResult;
            var value = objectResult.Value;

            Photo newPhoto = new Photo() { User = user, Url = "http://localhost:5000/" + value.ToString(), IsDeleted = false };

            _dbContext.Add(newPhoto);

            await _dbContext.SaveChangesAsync();

            return CreatedAtRoute("GetPhoto", new { id = newPhoto.Id }, newPhoto);

        }

    }
}
