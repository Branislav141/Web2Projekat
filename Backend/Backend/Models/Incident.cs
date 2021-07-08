﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Incident
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string Type { get; set; }
        public string Priority { get; set; }
        public string Confirmed { get; set; }
        public string Status { get; set; }
        public DateTime ETA { get; set; }
        public string Description { get; set; }
        public DateTime ATA { get; set; }
        public DateTime OutageTime { get; set; }
        public DateTime ETR { get; set; }
        public int AffectedCustommers { get; set; }
        public int Calls { get; set; }
        public string Voltage { get; set; }
        public DateTime ScheduledTime { get; set; }
    }
}
