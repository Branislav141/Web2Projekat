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
            document.Status = SftDAdd.Status;
            document.CreatedBy = SftDAdd.CreatedBy;
            document.FiledCrew = SftDAdd.FiledCrew;
            document.Details = SftDAdd.Details;
            document.Notes = SftDAdd.Notes;
            document.PhoneNo = SftDAdd.PhoneNo;
            document.CreationDate = SftDAdd.CreationDate;

         



            _dbContext.SafetyDocuments.Add(document);
            _dbContext.SaveChanges();

            return Ok();
        }

        [HttpPost("modify/{id}")]
        public IActionResult ModifyDocument(int id, [FromBody] SafetyDocumentsToModify docToModify)
        {
            SafetyDocuments document = _dbContext.SafetyDocuments.Where(x => x.Id == id).FirstOrDefault();

            document.Type = docToModify.Type;
            document.Plan = docToModify.Plan;
            document.Status = docToModify.Status;
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
