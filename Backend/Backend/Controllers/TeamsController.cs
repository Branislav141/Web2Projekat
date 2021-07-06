using Backend.Data;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TeamsController : ControllerBase
    {
        private readonly DataContext _dbContext;

        public TeamsController(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllTeams()
        {
            List<Team> teams = _dbContext.Teams.Where(x => x.IsDeleted == false).ToList();

            return Ok(teams);
        }

        [HttpGet("{id}")]
        public IActionResult GetTeam(int id)
        {
            Team team = _dbContext.Teams.Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault();

            return Ok(team);
        }


        [HttpPost]
        public IActionResult CreateTeam([FromBody] TeamToCreate teamToCreate)
        {
            var teamWithSameName = _dbContext.Teams.Where(x => x.Name == teamToCreate.Name).FirstOrDefault();

            if (teamWithSameName != null)
            {
                return BadRequest("Team already exists");
            }

            Team team = new Team();
            team.Name = teamToCreate.Name;
            team.Participants = "";

            _dbContext.Teams.Add(team);
            _dbContext.SaveChanges();

            return Ok();
        }


        [HttpPost("modify")]
        public IActionResult ModifyTeam([FromBody] TeamToModify teamToModify)
        {
            var teamWithSameName = _dbContext.Teams.Where(x => x.Name == teamToModify.Name).FirstOrDefault();

            if (teamWithSameName == null)
            {
                return BadRequest("No such team");
            }

            Team team = _dbContext.Teams.Where(x => x.Name == teamToModify.Name).FirstOrDefault();

            team.Participants = teamToModify.Participants;

            _dbContext.SaveChanges();

            return Ok();
        }

        [HttpGet("delete/{name}")]
        public IActionResult DeleteTeam(string name)
        {
            var team = _dbContext.Teams.Where(x => x.Name == name).FirstOrDefault();

            if (team == null)
            {
                return BadRequest("No such team");
            }

            team.IsDeleted = true;

            _dbContext.SaveChanges();

            return Ok();
        }

    }
}
