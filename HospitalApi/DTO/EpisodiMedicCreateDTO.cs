using HospitalAPI.Models;
using Mysqlx;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalApi.DTO
{
    public class EpisodiMedicCreateDTO
    {
        [Required]
        public string Motivo { get; set; } = string.Empty;
        [Required]
        public string Urgencia {get; set;} = string.Empty;
        [Required]
        [NotMapped]
        //[DNIrestriction]
        public string DNIPacient { get; set; } = string.Empty;
        [NotMapped]
        //[DNIrestriction]
        public string DNIMetge { get; set; } = string.Empty;

    }
}
