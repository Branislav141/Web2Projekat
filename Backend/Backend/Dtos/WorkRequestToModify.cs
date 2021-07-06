using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class WorkRequestToModify
    {
        public string Type { get; set; }
        public int Incident { get; set; }
        public string Street { get; set; }
        public DateTime StartedTime { get; set; }
        public DateTime FinishedTime { get; set; }
        public string Purpose { get; set; }
        public string Notes { get; set; }
        public Boolean Urgent { get; set; }
        public string Company { get; set; }
        public string PhoneNumber { get; set; }
    }
}
