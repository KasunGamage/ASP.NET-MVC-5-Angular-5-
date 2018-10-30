using System.Linq;
using System.Web.Http;
using WebApp.Models;
namespace WebApp.Controllers
{
    public class CustomerController : ApiController
    {
        private WebAppContext db = new WebAppContext();

        
        // GET: api/Customer
        public IQueryable<Customer> GetCustomer() //get all customers
        {
            return db.Customer;
        }

    }
}