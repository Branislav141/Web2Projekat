using Backend.Data;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class IncidentsController : ControllerBase
    {
        

        private readonly DataContext _dbContext;

        public IncidentsController(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult getAllIncidents()
        {
            List<Incident> inc = _dbContext.Incidents.ToList();

            return Ok(inc);
        }

        [HttpGet("my/{email}")]
        public IActionResult GetAllIncidents(string email)
        {
            List<Incident> incidents = _dbContext.Incidents.Where(x => x.UserCreated == email).ToList();

            return Ok(incidents);
        }


        [HttpGet("{id}")]
        public IActionResult GetIncident(int id)
        {
            Incident incident = _dbContext.Incidents.Where(x => x.id == id).FirstOrDefault();

            return Ok(incident);
        }


        [HttpPost]
        public IActionResult AddIncident([FromBody] IncidentsToAdd incToAdd)
        {
            Incident incident = new Incident();

           
            incident.Type = incToAdd.Type;
            incident.Priority = incToAdd.Priority;
            incident.Confirmed = incToAdd.Confirmed;
            incident.Status = "DRAFT";
            incident.ETA = incToAdd.ETA;
            incident.Description = incToAdd.Description;
            incident.ATA = incToAdd.ATA;
            incident.OutageTime = incToAdd.OutageTime;
            incident.ETR = incToAdd.ETR;
            incident.AffectedCustommers = incToAdd.AffectedCustommers;
            incident.Calls = incToAdd.Calls;
            incident.Voltage = incToAdd.Voltage;
            incident.ScheduledTime = incToAdd.ScheduledTime;
            incident.UserCreated = incToAdd.UserCreated;



            _dbContext.Incidents.Add(incident);
            _dbContext.SaveChanges();

            return Ok();
        }


        [HttpPost("modify/{id}")]
        public IActionResult ModifyIncident(int id, [FromBody] IncidentToModify incidentToModify)
        {
            Incident incident = _dbContext.Incidents.Where(x => x.id == id).FirstOrDefault();



            incident.id = incidentToModify.id;
            incident.Type = incidentToModify.Type;
            incident.Priority = incidentToModify.Priority;
            incident.Confirmed = incidentToModify.Confirmed;
            incident.Status = incidentToModify.Status;
            incident.ETA = incidentToModify.ETA;
            incident.Description = incidentToModify.Description;
            incident.ATA = incidentToModify.ATA;
            incident.OutageTime = incidentToModify.OutageTime;
            incident.ETR = incidentToModify.ETR;
            incident.AffectedCustommers = incidentToModify.AffectedCustommers;
            incident.Calls = incidentToModify.Calls;
            incident.Voltage = incidentToModify.Voltage;
            incident.ScheduledTime = incidentToModify.ScheduledTime;
            incident.UserCreated = incidentToModify.UserCreated;




            _dbContext.SaveChanges();

            return Ok();
        }
    }
}
