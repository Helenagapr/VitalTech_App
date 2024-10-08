﻿// <auto-generated />
using System;
using HospitalApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace HospitalApi.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            MySqlModelBuilderExtensions.AutoIncrementColumns(modelBuilder);

            modelBuilder.Entity("HospitalAPI.Models.Consulta", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("EpisodiMedicId")
                        .HasColumnType("int");

                    b.Property<int>("PersonalId")
                        .HasColumnType("int");

                    b.Property<string>("Recepta")
                        .HasColumnType("longtext");

                    b.Property<string>("Sintomatologia")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<bool>("Urgencia")
                        .HasColumnType("tinyint(1)");

                    b.HasKey("Id");

                    b.HasIndex("EpisodiMedicId");

                    b.HasIndex("PersonalId");

                    b.ToTable("Consultes");
                });

            modelBuilder.Entity("HospitalAPI.Models.EpisodiMedic", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("DataObertura")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime?>("DataTancament")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Dolencia")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Estat")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("PacientId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("PacientId");

                    b.ToTable("EpisodisMedics");
                });

            modelBuilder.Entity("HospitalAPI.Models.Habitacio", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CapacitatLlits")
                        .HasColumnType("int");

                    b.Property<int>("CodiHabitacio")
                        .HasColumnType("int");

                    b.Property<int>("PlantaId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CodiHabitacio")
                        .IsUnique();

                    b.HasIndex("PlantaId");

                    b.ToTable("Habitacions");
                });

            modelBuilder.Entity("HospitalAPI.Models.Ingres", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("DataEntrada")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime?>("DataSortida")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("EpisodiMedicId")
                        .HasColumnType("int");

                    b.Property<int>("LlitId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("EpisodiMedicId");

                    b.HasIndex("LlitId");

                    b.ToTable("Ingressos");
                });

            modelBuilder.Entity("HospitalAPI.Models.Llit", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("CodiLlit")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.Property<bool>("ForaDeServei")
                        .HasColumnType("tinyint(1)");

                    b.Property<int>("HabitacioId")
                        .HasColumnType("int");

                    b.Property<bool>("Ocupat")
                        .HasColumnType("tinyint(1)");

                    b.HasKey("Id");

                    b.HasIndex("CodiLlit")
                        .IsUnique();

                    b.HasIndex("HabitacioId");

                    b.ToTable("Llits");
                });

            modelBuilder.Entity("HospitalAPI.Models.Pacient", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("DNI")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Nom")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("NumSS")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Sexe")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("DNI")
                        .IsUnique();

                    b.HasIndex("NumSS")
                        .IsUnique();

                    b.ToTable("Pacients");
                });

            modelBuilder.Entity("HospitalAPI.Models.Personal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("DNI")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Especialitat")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Nom")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("DNI")
                        .IsUnique();

                    b.ToTable("Personals");
                });

            modelBuilder.Entity("HospitalAPI.Models.Planta", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CapacitatHabitacions")
                        .HasColumnType("int");

                    b.Property<int>("Piso")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("Piso")
                        .IsUnique();

                    b.ToTable("Plantes");
                });

            modelBuilder.Entity("HospitalAPI.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("HospitalAPI.Models.Consulta", b =>
                {
                    b.HasOne("HospitalAPI.Models.EpisodiMedic", "EpisodiMedic")
                        .WithMany("Consultes")
                        .HasForeignKey("EpisodiMedicId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("HospitalAPI.Models.Personal", "Personal")
                        .WithMany("Consultes")
                        .HasForeignKey("PersonalId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("EpisodiMedic");

                    b.Navigation("Personal");
                });

            modelBuilder.Entity("HospitalAPI.Models.EpisodiMedic", b =>
                {
                    b.HasOne("HospitalAPI.Models.Pacient", "Pacient")
                        .WithMany("EpisodisMedics")
                        .HasForeignKey("PacientId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Pacient");
                });

            modelBuilder.Entity("HospitalAPI.Models.Habitacio", b =>
                {
                    b.HasOne("HospitalAPI.Models.Planta", "Planta")
                        .WithMany("Habitacions")
                        .HasForeignKey("PlantaId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Planta");
                });

            modelBuilder.Entity("HospitalAPI.Models.Ingres", b =>
                {
                    b.HasOne("HospitalAPI.Models.EpisodiMedic", "EpisodiMedic")
                        .WithMany("Ingressos")
                        .HasForeignKey("EpisodiMedicId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("HospitalAPI.Models.Llit", "Llit")
                        .WithMany("Ingressos")
                        .HasForeignKey("LlitId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("EpisodiMedic");

                    b.Navigation("Llit");
                });

            modelBuilder.Entity("HospitalAPI.Models.Llit", b =>
                {
                    b.HasOne("HospitalAPI.Models.Habitacio", "Habitacio")
                        .WithMany("Llits")
                        .HasForeignKey("HabitacioId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Habitacio");
                });

            modelBuilder.Entity("HospitalAPI.Models.EpisodiMedic", b =>
                {
                    b.Navigation("Consultes");

                    b.Navigation("Ingressos");
                });

            modelBuilder.Entity("HospitalAPI.Models.Habitacio", b =>
                {
                    b.Navigation("Llits");
                });

            modelBuilder.Entity("HospitalAPI.Models.Llit", b =>
                {
                    b.Navigation("Ingressos");
                });

            modelBuilder.Entity("HospitalAPI.Models.Pacient", b =>
                {
                    b.Navigation("EpisodisMedics");
                });

            modelBuilder.Entity("HospitalAPI.Models.Personal", b =>
                {
                    b.Navigation("Consultes");
                });

            modelBuilder.Entity("HospitalAPI.Models.Planta", b =>
                {
                    b.Navigation("Habitacions");
                });
#pragma warning restore 612, 618
        }
    }
}
