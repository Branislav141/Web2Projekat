using Backend.Data;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    

    [Route("api/[controller]")]
    [ApiController]
    public class ElementMrezeController : ControllerBase
    {


        private readonly DataContext _dbContext;

        public ElementMrezeController(DataContext dbContext)
        {
            _dbContext = dbContext;
        }


        [HttpGet]
        public IActionResult getAllElements()
        {
            List<ElementMreze> inc = _dbContext.Elementi.ToList();

            return Ok(inc);
        }

        [HttpGet("my/{email}")]
        public IActionResult GetAllElements(string email)
        {
            List<ElementMreze> elementMre = _dbContext.Elementi.Where(x => x.UserCreated == email).ToList();

            return Ok(elementMre);
        }

        [HttpPost]
        public IActionResult AddElement([FromBody] ElementsToAdd elmToAdd)
        {
            ElementMreze element = new ElementMreze();


            element.Type = elmToAdd.Type;
            element.Name = elmToAdd.Name;
            element.Adress = elmToAdd.Adress;
            element.Coordinates = elmToAdd.Coordinates;
            element.UserCreated = elmToAdd.UserCreated;



            _dbContext.Elementi.Add(element);
            _dbContext.SaveChanges();

            return Ok();
        }




    }
}
