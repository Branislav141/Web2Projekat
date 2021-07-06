using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations.Data
{
    public partial class type : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DocumentType",
                table: "WorkRequests");

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "WorkRequests",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "WorkRequests");

            migrationBuilder.AddColumn<string>(
                name: "DocumentType",
                table: "WorkRequests",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
