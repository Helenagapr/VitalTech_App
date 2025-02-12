using System.ComponentModel.DataAnnotations;
using HospitalAPI.Models;

namespace HospitalAPI.DTO
{
    public class CitaReadDTO
    {

        public string Metge {get;set;}

        public string Pacient {get;set;} 

        public int Episodi {get;set;}

        public string Motiu {get;set;}
        
        [DataType(DataType.Date)]
        public DateTime DataCita {get;set;}

    }
}
