using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations.Data
{
    public partial class changehistorydoc : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
           

            migrationBuilder.CreateTable(
                name: "ChangeDoc",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    User = table.Column<string>(nullable: true),
                    SafetyDocumentsId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChangeDoc", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChangeDoc_SafetyDocuments_SafetyDocumentsId",
                        column: x => x.SafetyDocumentsId,
                        principalTable: "SafetyDocuments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ChangeDoc_SafetyDocumentsId",
                table: "ChangeDoc",
                column: "SafetyDocumentsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ChangeDoc");

         
        }
    }
}
