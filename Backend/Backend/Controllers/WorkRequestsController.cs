using Backend.Data;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class WorkRequestsController : ControllerBase
    {
        private readonly DataContext _dbContext;

        public WorkRequestsController(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllWorkRequests(string email)
        {
            List<WorkRequest> workRequests = _dbContext.WorkRequests.Where(x => x.UserCreated == email).ToList();

            return Ok(workRequests);
        }

        [HttpPost]
        public IActionResult AddWorkRequest([FromBody] WorkRequestToAdd workRequestToAdd)
        {
            WorkRequest workRequest = new WorkRequest();

            workRequest.DocumentType = workRequestToAdd.DocumentType;
            workRequest.Status = "Draft";
            workRequest.Incident = workRequestToAdd.Incident;
            workRequest.Status = workRequestToAdd.Street;
            workRequest.StartedTime = workRequestToAdd.StartedTime;
            workRequest.FinishedTime = workRequestToAdd.FinishedTime;
            workRequest.UserCreated = workRequestToAdd.UserCreated;
            workRequest.Purpose = workRequestToAdd.Purpose;
            workRequest.Notes = workRequestToAdd.Notes;
            workRequest.Urgent = workRequestToAdd.Urgent;
            workRequest.Company = workRequestToAdd.Company;
            workRequest.PhoneNumber = workRequestToAdd.PhoneNumber;
            workRequest.CreationDate = new DateTime();

            var equipment = _dbContext.Equipment.Where(x => workRequestToAdd.Equipment.Contains(x.Name)).ToList();

            workRequest.Equipment = equipment;

            _dbContext.WorkRequests.Add(workRequest);
            _dbContext.SaveChanges();

            return Ok();
        }
    }
}
