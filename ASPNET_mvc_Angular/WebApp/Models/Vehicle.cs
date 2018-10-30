using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Vehicle
    {
        [Key]
        public int vehicleId { get; set; }

        [Required]
        public string vehChasiNbr { get; set; }

        [Required]
        public DateTime startDate { get; set; }

        [Required]
        public string cusId { get; set; }
    }
}