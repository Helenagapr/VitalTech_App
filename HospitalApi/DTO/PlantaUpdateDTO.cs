﻿namespace HospitalApi.DTO
{
    public class PlantaUpdateDTO
    {
        public int PacientId { get; set; }
        public int MetgeId { get; set; }
        public int EnfermerId { get; set; }
        public int EpisodiMedicId { get; set; }
        public string? Dolencia { get; set; }

    }
}
