using Backend.Data;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        [HttpGet("all/{email}")]
        public IActionResult GetAllWorkRequests(string email)
        {
            List<WorkRequest> workRequests = _dbContext.WorkRequests.Where(x => x.UserCreated == email).ToList();

            return Ok(workRequests);
        }

        [HttpGet("{id}")]
        public IActionResult GetWorkRequest(int id)
        {
            WorkRequest workRequest = _dbContext.WorkRequests.Where(x => x.Id == id).FirstOrDefault();

            return Ok(workRequest);
        }

        [HttpGet("history/{id}")]
        public IActionResult GetWorkRequestHistory(int id)
        {
            List<Change> changeHistory = _dbContext.WorkRequests.Include(c => c.ChangeHistory).Where(x => x.Id == id).FirstOrDefault().ChangeHistory;

            return Ok(changeHistory);
        }

        [HttpPost("equipment")]
        public IActionResult UpdateEquipment([FromBody]EquipmentToAdd equipment)
        {
            WorkRequest workRequest = _dbContext.WorkRequests.Where(x => x.Id == equipment.Id).FirstOrDefault();
            workRequest.Equipment = equipment.Equipment;

            _dbContext.SaveChanges();

            return Ok();
        }


        [HttpPost]
        public IActionResult AddWorkRequest([FromBody] WorkRequestToAdd workRequestToAdd)
        {
            WorkRequest workRequest = new WorkRequest();

            workRequest.Type = workRequestToAdd.Type;
            workRequest.Status = "DRAFT";
            workRequest.Street = workRequestToAdd.Street;
            workRequest.Incident = workRequestToAdd.Incident;
            workRequest.StartedTime = workRequestToAdd.StartedTime;
            workRequest.FinishedTime = workRequestToAdd.FinishedTime;
            workRequest.UserCreated = workRequestToAdd.UserCreated;
            workRequest.Purpose = workRequestToAdd.Purpose;
            workRequest.Notes = workRequestToAdd.Notes;
            workRequest.Urgent = workRequestToAdd.Urgent;
            workRequest.Company = workRequestToAdd.Company;
            workRequest.PhoneNumber = workRequestToAdd.PhoneNumber;
            workRequest.Equipment = "";
            workRequest.CreationDate = DateTime.Now;
            workRequest.ChangeHistory = new List<Change>();

            _dbContext.WorkRequests.Add(workRequest);
            _dbContext.SaveChanges();

            return Ok();
        }

        [HttpPost("changeStatus")]
        public IActionResult ChangeStatus([FromBody] StatusToChange statusToChange)
        {
            WorkRequest workRequest = _dbContext.WorkRequests.Include(c => c.ChangeHistory).Where(x => x.Id == statusToChange.Id).FirstOrDefault();

            workRequest.Status = statusToChange.Status;

            Change change = new Change();

            change.Date = DateTime.Now;
            change.Status = statusToChange.Status;
            change.User = statusToChange.User;


            workRequest.ChangeHistory.Add(change);

            _dbContext.SaveChanges();

            return Ok();
        }


        [HttpPost("modify/{id}")]
        public IActionResult ModifyWorkRequest(int id, [FromBody] WorkRequestToModify workRequestToModify)
        {
            WorkRequest workRequest = _dbContext.WorkRequests.Where(x => x.Id == id).FirstOrDefault();

            workRequest.Type = workRequestToModify.Type;
            workRequest.Incident = workRequestToModify.Incident;
            workRequest.Street = workRequestToModify.Street;
            workRequest.StartedTime = workRequestToModify.StartedTime;
            workRequest.FinishedTime = workRequestToModify.FinishedTime;
            workRequest.Purpose = workRequestToModify.Purpose;
            workRequest.Notes = workRequestToModify.Notes;
            workRequest.Urgent = workRequestToModify.Urgent;
            workRequest.Company = workRequestToModify.Company;
            workRequest.PhoneNumber = workRequestToModify.PhoneNumber;

            _dbContext.SaveChanges();

            return Ok();
        }
    }
}
