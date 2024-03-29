﻿using System;
using System.Collections.Generic;

namespace Backend.Models
{
    public class WorkRequest
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
        public int Incident { get; set; }
        public string Street { get; set; }
        public DateTime StartedTime { get; set; }
        public DateTime FinishedTime { get; set; }
        public string UserCreated { get; set; }
        public string Purpose { get; set; }
        public string Notes { get; set; }
        public bool Urgent { get; set; }
        public string Company { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime CreationDate { get; set; }
        public string Equipment { get; set; }
        public List<Change> ChangeHistory { get; set; }
    }
}
