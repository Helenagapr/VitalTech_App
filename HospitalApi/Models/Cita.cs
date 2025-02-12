using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalAPI.Models
{
    public class Cita
    {

        [Key]
        public int Id { get; set; }

        public string Metge { get; set; }

        public string Pacient {get;set;}

        public int Episodi {get;set;}

        public string Motiu {get;set;}

        public DateTime DataCita { get; set; }

    }
}
