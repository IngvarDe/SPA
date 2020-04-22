using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SPA.Core.Domain;
using SPA.Core.ServiceInterface;
using SPA.Data;


namespace SPA.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class MovieController : ControllerBase
    {
        private readonly SPAContext _context;
        private readonly IMoviePostsService _moviePostsService;


        public MovieController(
            SPAContext context,
            IMoviePostsService moviePostsService
            )
        {
            _context = context;
            _moviePostsService = moviePostsService;
        }

        public IEnumerable<Movie> Get()
        {
            return _moviePostsService.GetAll();
        }

        [HttpGet("{id}")]
        public Movie GetMovie(int id)
        {
            return _moviePostsService.GetMovieById(id);
        }
    }
}