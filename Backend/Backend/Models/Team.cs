using System.Collections.Generic;

namespace Backend.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Participant> Participants { get; set; }
        public bool IsDeleted { get; set; }
    }
}
