using System.Linq;
using System.Web.Http;
using System.Web.Http.Description;
using WebApp.Models;


namespace WebApp.Controllers
{
    public class VehicleController : ApiController
    {
        private WebAppContext db = new WebAppContext();

        // GET: api/Vehicle
        public IQueryable<Vehicle> GetVehicle()
        {
            return db.Vehicle;
        }


        // POST: api/Vehicle/5

        [ResponseType(typeof(Vehicle))] //get vehicle's data by userId
        public IHttpActionResult GetVehicle(int cusId)
        {
            Vehicle vehicle = db.Vehicle.Find(cusId);
            if (vehicle == null)
            {
                return NotFound();
            }

            return Ok(vehicle);
        }
    }
}