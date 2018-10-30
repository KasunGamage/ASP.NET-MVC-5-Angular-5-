using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Lease
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string cusName { get; set; }

        [Required]
        public string vehChasiNbr { get; set; }

        [Required]
        public DateTime startDate { get; set; }

        [Required]
        public int leaseAmount { get; set; }

        [Required]
        public int intersetRate { get; set; }

        [Required]
        public int nbrOfMonths { get; set; }

        [Required]
        public int monthlyRental { get; set; }
        
        
    }
}