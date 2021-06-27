using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Photo> Photos { get; set; }
        public DbSet<Equipment> Equipment { get; set; }
        public DbSet<WorkRequest> WorkRequests { get; set; }
        public DbSet<Team> Teams { get; set; }
    }
}
