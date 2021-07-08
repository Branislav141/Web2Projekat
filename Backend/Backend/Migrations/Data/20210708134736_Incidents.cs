using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations.Data
{
    public partial class Incidents : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Incidents",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(nullable: true),
                    Priority = table.Column<string>(nullable: true),
                    Confirmed = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    ETA = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    ATA = table.Column<DateTime>(nullable: false),
                    OutageTime = table.Column<DateTime>(nullable: false),
                    ETR = table.Column<DateTime>(nullable: false),
                    AffectedCustommers = table.Column<int>(nullable: false),
                    Calls = table.Column<int>(nullable: false),
                    Voltage = table.Column<string>(nullable: true),
                    ScheduledTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incidents", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Incidents");
        }
    }
}
