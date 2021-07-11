using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class ElementsToAdd
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public string Adress { get; set; }
        public string Coordinates { get; set; }

        public string UserCreated { get; set; }
    }
}
