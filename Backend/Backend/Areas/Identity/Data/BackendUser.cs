using System;
using Microsoft.AspNetCore.Identity;

namespace Backend.Areas.Identity.Data
{
    // Add profile data for application users by adding properties to the BackendUser class
    public class BackendUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Birthday { get; set; }
        public string Address { get; set; }
        public string AccountType { get; set; }
        public string AccountStatus { get; set; }
    }
}
