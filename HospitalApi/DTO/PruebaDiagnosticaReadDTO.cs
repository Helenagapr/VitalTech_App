using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalApi.DTO
{
    public class PruebaDiagnosticaReadDTO
    {
        public int Id { get; set; }
        
        [NotMapped]
        public string? DNIMetge {get; set; }

        public string? Pruebas {get;set;}

        [NotMapped]
        public string? DNIEnfermer { get; set; }
        public int EpisodiMedicId { get; set; }
        public string? Dolencia { get; set; }
    }
}
