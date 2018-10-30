     using WebApp.Models;
	 
	 
	 
	 protected override void Seed(WebApp.Models.WebAppContext context)
        {
            
           context.Customer.AddOrUpdate(
             p => p.cusId,
             new Customer { cusId = 1, cusName = "Jhon" },
             new Customer { cusId = 2, cusName = "Silva" },
             new Customer { cusId = 3, cusName = "Gascan" },
             new Customer { cusId = 4, cusName = "Heidi" },
             new Customer { cusId = 5, cusName = "Chamara" }
           );

            context.Vehicle.AddOrUpdate(
                p => p.vehicleId,
                new Vehicle { vehicleId = 1, vehChasiNbr = "1995Vr", startDate = DateTime.Parse("2018-07-04"), cusId = "1" },
                new Vehicle { vehicleId = 2, vehChasiNbr = "5215Br", startDate = DateTime.Parse("2018-08-05"), cusId = "2" },
                new Vehicle { vehicleId = 3, vehChasiNbr = "4787Cr", startDate = DateTime.Parse("2018-03-06"), cusId = "3" },
                new Vehicle { vehicleId = 4, vehChasiNbr = "6954Op", startDate = DateTime.Parse("2018-04-07"), cusId = "4" },
                new Vehicle { vehicleId = 5, vehChasiNbr = "6654Ty", startDate = DateTime.Parse("2018-02-08"), cusId = "5" }
    

           );

       
        }

