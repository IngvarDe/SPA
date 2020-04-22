using SPA.Core.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SPA.Core.ServiceInterface
{
    public interface IMoviePostsService
    {
        IEnumerable<Movie> GetAll();
        Movie GetMovieById(int id);
    }
}
