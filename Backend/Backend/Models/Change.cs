using Backend.Areas.Identity.Data;
using System;


namespace Backend.Models
{
    public class Change
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public string User { get; set; }
    }
}
