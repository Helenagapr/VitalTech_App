using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace HospitalApi.DTO
{
    public class EpisodiMedicUpdateDTO
    {

        public int Id { get; set; }
        [Required]
        [DataType(DataType.Date, ErrorMessage = "Error de format de la data. AAAA/MM/DD")]
        public DateTime DataObertura { get; set; }
        [DataType(DataType.Date, ErrorMessage = "Error de format de la data. AAAA/MM/DD")]
        public DateTime? DataTancament { get; set; }
        [Required]
        public string Motivo { get; set; } = string.Empty;
        public string Urgencia { get; set; } = string.Empty;
        [Required]
        public string Recepta { get; set; } = string.Empty;
        [ESTATrestriction]
        public string Estat { get; set; } = string.Empty;


        [NotMapped]
        //[DNIrestriction]
        public string DNIPacient { get; set; } = string.Empty;

        [NotMapped]
        //[DNIrestriction]
        public string DNIMetge { get; set; } = string.Empty;

    }
}
