using Backend.Data;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SafetyDocumentsController : ControllerBase
    {


        private readonly DataContext _dbContext;

        public SafetyDocumentsController(DataContext dbContext)
        {
            _dbContext = dbContext;
        }


        [HttpGet]
        public IActionResult getSafetyDocuments()
        {
            List<SafetyDocuments> inc = _dbContext.SafetyDocuments.ToList();

            return Ok(inc);
        }


        [HttpGet("{id}")]
        public IActionResult GetSafetyDoc(int id)
        {
            SafetyDocuments doc = _dbContext.SafetyDocuments.Where(x => x.Id == id).FirstOrDefault();

            return Ok(doc);
        }

        [HttpPost]
        public IActionResult AddSafetyDocument([FromBody] SafetyDocumentsToAdd SftDAdd)
        {
            SafetyDocuments document = new SafetyDocuments();


            document.Type = SftDAdd.Type;
            document.Plan = SftDAdd.Plan;
            document.Status = "DRAFT";
            document.CreatedBy = SftDAdd.CreatedBy;
            document.FiledCrew = SftDAdd.FiledCrew;
            document.Details = SftDAdd.Details;
            document.Notes = SftDAdd.Notes;
            document.PhoneNo = SftDAdd.PhoneNo;
            document.CreationDate = SftDAdd.CreationDate;
            document.ChangeHistoryDoc = new List<ChangeDoc>();




            _dbContext.SafetyDocuments.Add(document);
            _dbContext.SaveChanges();

            return Ok();
        }

        [HttpGet("history/{id}")]
        public IActionResult GetDocHistory(int id)
        {
            List<ChangeDoc> changeHistoryDoc = _dbContext.SafetyDocuments.Include(c => c.ChangeHistoryDoc).Where(x => x.Id == id).FirstOrDefault().ChangeHistoryDoc;

            return Ok(changeHistoryDoc);
        }

        [HttpPost("changeStatus")]
        public IActionResult ChangeStatus([FromBody] StatusToChangeDoc statusToChange)
        {
            SafetyDocuments document = _dbContext.SafetyDocuments.Include(c => c.ChangeHistoryDoc).Where(x => x.Id == statusToChange.Id).FirstOrDefault();

            document.Status = statusToChange.Status;

            ChangeDoc change = new ChangeDoc();

            change.Date = DateTime.Now;
            change.Status = statusToChange.Status;
            change.User = statusToChange.User;


            document.ChangeHistoryDoc.Add(change);

            _dbContext.SaveChanges();

            return Ok();
        }

        [HttpPost("modify/{id}")]
        public IActionResult ModifyDocument(int id, [FromBody] SafetyDocumentsToModify docToModify)
        {
            SafetyDocuments document = _dbContext.SafetyDocuments.Where(x => x.Id == id).FirstOrDefault();

            document.Type = docToModify.Type;
            document.Plan = docToModify.Plan;
           
            document.CreatedBy = docToModify.CreatedBy;
            document.FiledCrew = docToModify.FiledCrew;
            document.Details = docToModify.Details;
            document.Notes = docToModify.Notes;
            document.PhoneNo = docToModify.PhoneNo;
            document.CreationDate = docToModify.CreationDate;

            _dbContext.SaveChanges();

            return Ok();
        }




    }
}
