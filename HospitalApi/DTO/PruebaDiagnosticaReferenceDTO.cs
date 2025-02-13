using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalApi.DTO
{
    public class PruebaDiagnosticaReferenceDTO
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int MetgeId { get; set; }
        [Required]
        public int EnfermerId { get; set; }
            public string? Pruebas {get;set;}
        [Required]
        public int EpisodiMedicId { get; set; }
        [Required]
        public string? Dolencia { get; set; }
    }
}
