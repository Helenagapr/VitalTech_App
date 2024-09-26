﻿using System.ComponentModel.DataAnnotations.Schema;
using HospitalAPI.Models;

namespace HospitalAPI.DTO
{
    public class LlitDTO
    {
        public string CodiLlit { get; set; }
        public bool Ocupat {get;set;}
        public bool ForaDeServei {get;set;}
        public int HabitacioId { get; set; }

        public ICollection<IngresDTO> Ingressos { get; set; }
    }
}
