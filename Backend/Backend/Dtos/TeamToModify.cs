using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class TeamToModify
    {
        public string Name { get; set; }
        public string[] Participants { get; set; }
    }
}
