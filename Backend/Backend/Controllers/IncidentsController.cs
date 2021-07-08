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
    public class IncidentsController : ControllerBase
    {
        

        private readonly DataContext _dbContext;

        public IncidentsController(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("all")]
        public IActionResult getAllIncidents()
        {
            List<Incident> inc = _dbContext.Incidents.ToList();

            return Ok(inc);
        }

    }
}
