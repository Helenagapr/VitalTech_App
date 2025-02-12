using AutoMapper;
using HospitalApi.DTO;
using HospitalAPI.DTO;
using HospitalAPI.Models;

namespace HospitalAPI
{
    public class MapConfig : Profile
    {
        public MapConfig()
        {
            CreateMap<Enfermer, EnfermerCreateDTO>().ReverseMap();
            CreateMap<Enfermer, EnfermerReadDTO>().ReverseMap();
            CreateMap<Enfermer, EnfermerUpdateDTO>().ReverseMap();

            CreateMap<Cita, CitaCreateDTO> ().ReverseMap();
            CreateMap<Cita, CitaReadDTO> ().ReverseMap();
            CreateMap<Cita, CitaUpdateDTO> ().ReverseMap();

            CreateMap<PruebasDiagnosticas, PruebaDiagnosticaCreateDTO>().ReverseMap();
            CreateMap<PruebasDiagnosticas, PruebaDiagnosticaReadDTO>().ReverseMap();
            CreateMap<PruebasDiagnosticas, PruebaDiagnosticaReferenceDTO>().ReverseMap();

            CreateMap<Habitacio, HabitacioReadDTO>().ReverseMap();
            CreateMap<Habitacio, HabitacionReferenceDTO>().ReverseMap();
            CreateMap<Habitacio, HabitacioCreateDTO>().ReverseMap();

            CreateMap<Llit, LlitReadDTO>().ReverseMap();
            CreateMap<Llit, LlitReferenceDTO>().ReverseMap();
            CreateMap<Llit, LlitCreateDTO>().ReverseMap();
            CreateMap<Llit, LlitUpdateDTO>().ReverseMap();

            CreateMap<Planta, PlantaReadDTO>().ReverseMap();
            CreateMap<Planta, PlantaCreateDTO>().ReverseMap();
            CreateMap<Planta, PlantaUpdateDTO>().ReverseMap();

            CreateMap<EpisodiMedic, EpisodiMedicReadDTO>().ReverseMap();
            CreateMap<EpisodiMedic, EpisodiMedicCreateDTO>().ReverseMap();
            CreateMap<EpisodiMedic, EpisodiMedicUpdateDTO>().ReverseMap();
            CreateMap<EpisodiMedic, EpisodiMedicReferenceDTO>().ReverseMap();

            CreateMap<Ingres, IngresReadDTO>().ReverseMap();
            CreateMap<Ingres, IngresCreateDTO>().ReverseMap();
            CreateMap<Ingres, IngresReferenceDTO>().ReverseMap();

            CreateMap<Pacient, PacientReadDTO>().ReverseMap();
            CreateMap<Pacient, PacientCreateDTO>().ReverseMap();
            CreateMap<Pacient, PacientUpdateDTO>().ReverseMap();

            CreateMap<Metge, MetgeReadDTO>().ReverseMap();
            CreateMap<Metge, MetgeCreateDTO>().ReverseMap();
            CreateMap<Metge, MetgeUpdateDTO>().ReverseMap();

            CreateMap<Rol, RolReadDTO>().ReverseMap();
            CreateMap<Rol, RolCreateDTO>().ReverseMap();
            CreateMap<Rol, RolUpdateDTO>().ReverseMap();

            CreateMap<AdministradorSistema, AdministradorSistemaReadDTO>().ReverseMap();
            CreateMap<AdministradorSistema, AdministradorSistemaCreateDTO>().ReverseMap();
            CreateMap<AdministradorSistema, AdministradorSistemaUpdateDTO>().ReverseMap();

            CreateMap<Usuari, UsuariReadDTO>().ReverseMap();
            CreateMap<Usuari, UsuariCreateDTO>().ReverseMap();

            CreateMap<Administratiu, AdministratiuReadDTO>().ReverseMap();
            CreateMap<Administratiu, AdministratiuUpdateDTO>().ReverseMap();
        }
    }
}
