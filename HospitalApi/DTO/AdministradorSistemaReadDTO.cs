using System.ComponentModel.DataAnnotations;
using HospitalAPI.Models;

namespace HospitalAPI.DTO
{
    public class AdministradorSistemaReadDTO
    {
    public string DNI {get; set;} = string.Empty;
    public string Nom {get; set;} = string.Empty;
    public string Telefon { get; set; } = string.Empty;
    public int UsuariId { get; set; }
    public string Prioridad { get; set; } = string.Empty;
    }
}
