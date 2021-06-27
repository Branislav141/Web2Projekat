using Backend.Data;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EquipmentController : ControllerBase
    {
        private readonly DataContext _dbContext;

        public EquipmentController(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllEquipment()
        {
            List<Equipment> equipment = _dbContext.Equipment.ToList();

            return Ok(equipment);
        }

        [HttpPost]
        public IActionResult AddEquipment([FromBody] EquipmentToAdd equipmentToAdd)
        {
            Equipment equipment = new Equipment();
            equipment.Name = equipmentToAdd.Name;

            _dbContext.Equipment.Add(equipment);
            _dbContext.SaveChanges();

            return Ok();
        }
    }
}
