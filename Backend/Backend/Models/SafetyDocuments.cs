using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class SafetyDocuments
    {
        
        public int Id { get; set; }
        public string Type { get; set; }
        public string Plan { get; set; }
        public string Status { get; set; }
        public string CreatedBy { get; set; }
        public string FiledCrew { get; set; }
        public string Details { get; set; }
        public string Notes { get; set; }
        public string PhoneNo { get; set; }
        public DateTime CreationDate { get; set; }

        public List<ChangeDoc> ChangeHistoryDoc { get; set; }
    }
}
