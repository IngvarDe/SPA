using Microsoft.EntityFrameworkCore;
using SPA.Core.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace SPA.Data
{
    public class SPAContext : DbContext
    {
        public SPAContext(DbContextOptions<SPAContext> options)
            : base(options)
        {
        }

        public DbSet<Movie> Movie { get; set; }
        public DbSet<Category> Category { get; set; }
    }
}
