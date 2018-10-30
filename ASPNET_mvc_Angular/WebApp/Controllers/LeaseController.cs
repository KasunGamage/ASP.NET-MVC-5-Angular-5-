using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Description;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class LeaseController : ApiController
    {
        private WebAppContext db = new WebAppContext();

        // GET: api/Lease
        public IQueryable<Lease> GetLease() //get all leasing details
        {
            return db.Lease;
        }

        // GET: api/Lease/5
        [ResponseType(typeof(Lease))]
        //public IHttpActionResult GetLease(int id) //get leaseing details by id
        //{
        //    Lease lease = db.Lease.Find(id);
        //    if (lease == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(lease);
        //}

    

        // POST: api/Lease
        [ResponseType(typeof(Lease))] // add new leasing detail
        public IHttpActionResult PostLease(Lease lease)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Lease.Add(lease);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = lease.Id }, lease);
        }

        // DELETE: api/Lease/5
        [ResponseType(typeof(Lease))] // delete exsisting leasing detail
        public IHttpActionResult DeleteLease(int id)
        {
            Lease lease = db.Lease.Find(id);
            if (lease == null)
            {
                return NotFound();
            }

            db.Lease.Remove(lease);
            db.SaveChanges();

            return Ok(lease);
        }

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool LeaseExists(int id)
        //{
        //    return db.Lease.Count(e => e.Id == id) > 0;
        //}
    }
}