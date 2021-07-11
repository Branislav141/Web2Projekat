using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class ElementMreze
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Type { get; set; } 
        public string Name { get; set; }
        public string Adress { get; set; }
        public string Coordinates { get; set; }
        public string UserCreated { get; set; }
    }
}
