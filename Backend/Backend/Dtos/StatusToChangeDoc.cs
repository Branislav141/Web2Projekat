using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class StatusToChangeDoc
    {
        public int Id { get; set; }
        public string User { get; set; }
        public string Status { get; set; }
    }
}
