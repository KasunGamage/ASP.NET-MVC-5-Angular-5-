namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Customers",
                c => new
                    {
                        cusId = c.Int(nullable: false, identity: true),
                        cusName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.cusId);
            
            CreateTable(
                "dbo.Leases",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        cusName = c.String(nullable: false),
                        vehChasiNbr = c.String(nullable: false),
                        startDate = c.DateTime(nullable: false),
                        leaseAmount = c.Int(nullable: false),
                        intersetRate = c.Int(nullable: false),
                        nbrOfMonths = c.Int(nullable: false),
                        monthlyRental = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Vehicles",
                c => new
                    {
                        vehicleId = c.Int(nullable: false, identity: true),
                        vehChasiNbr = c.String(nullable: false),
                        startDate = c.DateTime(nullable: false),
                        cusId = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.vehicleId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Vehicles");
            DropTable("dbo.Leases");
            DropTable("dbo.Customers");
        }
    }
}
