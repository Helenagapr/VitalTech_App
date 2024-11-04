using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalAPI.Models
{
    public class RolPermisEntitat
    {

        [Key]
        public int Id { get; set; }

        [ForeignKey("Rol")]
        public required string RolId { get; set; }
        public Rol? Rol { get; set; }

        [ForeignKey("Permis")]
        public required Permis PermisId { get; set; }
        public Permis? Permis { get; set; }

        [ForeignKey("Entitat")]
        public required Entitat EntitatId { get; set; }
        public Entitat? Entitat { get; set; }

    }
}
