using System;
using System.Collections.Generic;
using System.Text;

namespace SPA.Core.Domain
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string Description { get; set; }
        public string Rating { get; set; }
        public Category Category { get; set; }
    }
}
