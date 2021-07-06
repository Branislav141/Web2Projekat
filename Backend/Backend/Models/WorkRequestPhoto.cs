using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class WorkRequestPhoto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public virtual WorkRequest WorkRequest { get; set; }
        public bool IsDeleted { get; set; }
    }
}
