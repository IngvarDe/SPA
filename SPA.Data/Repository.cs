using SPA.Core.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace SPA.Data
{
    public class Repository
    {
        public List<Movie> GetData = new List<Movie>
        {
            new Movie
            {
                Id= 1,
                Title = "Star Wars",
                Year = 1977,
                Description = "Jedi action",
                Rating = "A",
                Category = new Category
                {
                    Id = 1,
                    Name = "Sci-fi"
                }
            },

            new Movie
            {
                Id= 2,
                Title = "Back to the Future",
                Year = 1985,
                Description = "They have a flying car",
                Rating = "B",
                Category = new Category
                {
                    Id = 1,
                    Name = "Sci-fi"
                }
            },

            new Movie
            {
                Id= 3,
                Title = "Dune",
                Year = 1985,
                Description = "Endless sand planet",
                Rating = "C",
                Category = new Category
                {
                    Id = 2,
                    Name = "Action"
                }
            },

            new Movie
            {
                Id= 4,
                Title = "Terminator 2",
                Year = 1991,
                Description = "Robot fighting movie",
                Rating = "B",
                Category = new Category
                {
                    Id = 3,
                    Name = "Drama"
                }
            }
        };
    }
}
