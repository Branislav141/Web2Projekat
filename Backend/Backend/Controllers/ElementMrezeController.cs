using Backend.Data;
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




    }
}
