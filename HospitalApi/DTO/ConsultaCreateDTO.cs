﻿using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalApi.DTO
{
    public class ConsultaCreateDTO
    {
        public bool Urgencia { get; set; } = false;
        public string? Sintomatologia { get; set; }
        public string? Recepta { get; set; }
        [NotMapped]
        public string DNIPersonal { get; set; } = string.Empty;
        public int EpisodiMedicId { get; set; }
    }
}
