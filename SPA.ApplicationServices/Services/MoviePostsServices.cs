using SPA.Data;
using System.Threading.Tasks;
using SPA.Core.ServiceInterface;
using System.Collections.Generic;
using SPA.Core.Domain;
using System.Linq;

namespace SPA.ApplicationServices.Services
{
    public class MoviePostsServices : IMoviePostsService
    {
        private readonly SPAContext _context;
        private readonly Repository _repository;

        public MoviePostsServices
            (
            SPAContext context,
            Repository repository
            )
        {
            _context = context;
            _repository = repository;
        }

        public IEnumerable<Movie> GetAll()
        {
            return _repository.GetData;
        }

        public Movie GetMovieById(int id)
        {
            return _repository.GetData.SingleOrDefault(x => x.Id == id);
        }
    }
}
