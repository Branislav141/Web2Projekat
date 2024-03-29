﻿using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Photo> Photos { get; set; }
        public DbSet<WorkRequestPhoto> WorkRequestPhotos { get; set; }
        public DbSet<WorkRequest> WorkRequests { get; set; }
        public DbSet<Incident> Incidents { get; set; }

        public DbSet<ElementMreze> Elementi { get; set; }
        public DbSet<SafetyDocuments> SafetyDocuments { get; set; }

        public DbSet<Team> Teams { get; set; }
    }
}
