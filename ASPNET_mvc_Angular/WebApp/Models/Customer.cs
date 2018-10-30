using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Customer
    {
        [Key]
        public int cusId { get; set; }

        [Required]
        public string cusName { get; set; }
    }
}