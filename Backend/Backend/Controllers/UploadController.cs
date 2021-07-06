using Backend.Data;
using Backend.Helpers;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public IActionResult GetPhoto(string id)
        {
            var photoFromRepo = _dbContext.Photos.Include(x => x.User).Where(x => x.User.Id == id).FirstOrDefault();

            if(photoFromRepo != null)
            {
                Photo photo = new Photo()
                {
                    Id = photoFromRepo.Id,
                    Url = photoFromRepo.Url,
                    IsDeleted = photoFromRepo.IsDeleted
                };

                return Ok(photo);
            } else
            {
                return Ok();
            }
        }

   

        [HttpGet("workRequest/{id}")]
        public IActionResult GetAllPhotosForWorkRequest(int id)
        {
            var photos = _dbContext.WorkRequestPhotos.Where(x => x.WorkRequest.Id == id && !x.IsDeleted).ToList();
            return Ok(photos);
        }

        [HttpGet("deleteUserPhoto/{id}")]
        public async Task<IActionResult> DeleteUserPhoto(int id)
        {
            var photo = _dbContext.Photos.Where(x => x.Id == id).FirstOrDefault();

            _dbContext.Remove(photo);

            await _dbContext.SaveChangesAsync();
            
            return Ok();
        }


        [HttpGet("deleteWorkRequestPhoto/{id}")]
        public async Task<IActionResult> DeleteWorkRequestePhoto(int id)
        {
            var photo = _dbContext.WorkRequestPhotos.Where(x => x.Id == id).FirstOrDefault();

            photo.IsDeleted = true;

            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("users/{userId}")]
        public async Task<IActionResult> UploadImageForUser(string userId, IFormFile file)
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

        [HttpPost("workRequests/{id}")]
        public async Task<IActionResult> UploadImageForWorkRequest(int id, IFormFile file) 
        {
            var wr = _dbContext.WorkRequests.Where(x => x.Id == id).FirstOrDefault();
            var image_location = await _imageHandler.UploadImage(file);
            var objectResult = image_location as ObjectResult;
            var value = objectResult.Value;

            WorkRequestPhoto newPhoto = new WorkRequestPhoto() { WorkRequest = wr, Url = "http://localhost:5000/" + value.ToString(), IsDeleted = false };

            _dbContext.Add(newPhoto);

            await _dbContext.SaveChangesAsync();

            return CreatedAtRoute("GetPhoto", new { id = newPhoto.Id }, newPhoto);
        }

    }
}
