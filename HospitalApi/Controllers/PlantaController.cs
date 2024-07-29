using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HospitalApi.Data;
using HospitalAPI.DTO;
using HospitalAPI.Models;
using Microsoft.AspNetCore.JsonPatch;
using HospitalApi.DTO;

namespace HospitalAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class PlantaController : ControllerBase
    {
        private readonly ILogger<PlantaController> _logger;
        private readonly ApplicationDbContext _bbdd;
        private readonly IMapper _mapper;

        public PlantaController(ILogger<PlantaController> logger, ApplicationDbContext bbdd, IMapper mapper)
        {
            _logger = logger;
            _bbdd = bbdd;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<PlantaDTO>>> GetPlantes()
        {
            _logger.LogInformation("Obtenint les habitacions");
            IEnumerable<Planta> plantaList = await _bbdd.Plantes.Include("Habitacions").ToListAsync();
            return Ok(_mapper.Map<IEnumerable<PlantaDTO>>(plantaList));
        }

        [HttpGet("id", Name = "GetPlanta")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<PlantaDTO>> GetPlanta(int id)
        {

            if (id <= 0)
            {
                _logger.LogError("Error, no existeix la planta amb el id indicat.");
                return BadRequest("Error, no existeix la planta amb el id indicat.");
            }

            var planta = await _bbdd.Plantes.Include("Habitacions").FirstOrDefaultAsync(h => h.Id == id);
            if (planta == null) return NotFound();

            return Ok(_mapper.Map<PlantaDTO>(planta));

        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<PlantaCreateDTO>> PostPlanta([FromBody] PlantaCreateDTO userPlantaDTO)
        {
            if (!ModelState.IsValid)
            {
                _logger.LogError("Error: dades introdu�des incorrectes");
                return BadRequest(ModelState);
            }

            Planta planta = _mapper.Map<Planta>(userPlantaDTO);

            await _bbdd.Plantes.AddAsync(planta);
            await _bbdd.SaveChangesAsync();

            _logger.LogInformation("Planta creada satisfact�riament.");
            return CreatedAtRoute("GetPlanta", planta);

        }

        [HttpDelete("id")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeletePlanta(int id)
        {
            if (id <= 0) {
                _logger.LogError("Error: format d'ID introdu�t incorrecte.");
                return BadRequest(ModelState);
             }

            var planta = await _bbdd.Plantes.FirstOrDefaultAsync(h => h.Id == id);

            var habitacio = await _bbdd.Habitacions.FirstOrDefaultAsync(h => h.PlantaId == id);


            if (planta == null)
            {
                _logger.LogError("Error: no existeix cap planta amb aquest ID.");
                return NotFound("Error: no existeix cap planta amb aquest ID.");
            }

            if (habitacio == null) {

            }


            if (planta.Habitacions.Any())
            {
                _logger.LogError("Error: no es pot esborrar una planta que cont� habitacions.");
                return BadRequest("Error: no es pot esborrar una planta que cont� habitacions");
            }

            _bbdd.Plantes.Remove(planta);
            await _bbdd.SaveChangesAsync();

            _logger.LogInformation("Planta esborrada satisfact�riament.");
            return NoContent();

        }

        [HttpPut("id")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UpdatePlanta(int id, [FromBody] PlantaUpdateDTO userPlantaDTO)
        {

            if (userPlantaDTO == null || id != userPlantaDTO.Id)
            {
                _logger.LogError("Error: planta no trobada o dades introdu�des incorrectes.");
                return BadRequest("Error: planta no trobada o dades introdu�des incorrectes.");
            }

            Planta planta = _mapper.Map<Planta>(userPlantaDTO);

            _bbdd.Plantes.Update(planta);
            await _bbdd.SaveChangesAsync();

            _logger.LogInformation("Planta modificada exitosament.");
            return NoContent();

        }

        [HttpPatch("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<IActionResult> UpdateParcialPlanta(int id, JsonPatchDocument<PlantaDTO> patchDto)
        {
            if (patchDto == null || id <= 0)
            {
                _logger.LogError("Error: no existeix la planta amb el ID indicat.");
                return BadRequest("Error: no existeix la planta amb el ID indicat.");
            }

            var planta = await _bbdd.Plantes.AsNoTracking().FirstOrDefaultAsync(v => v.Id == id);

            PlantaDTO plantadto = _mapper.Map<PlantaDTO>(planta);

            patchDto.ApplyTo(plantadto, ModelState);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Planta modelo = _mapper.Map<Planta>(plantadto);

            _bbdd.Update(modelo);
            await _bbdd.SaveChangesAsync();

            _logger.LogInformation("Planta actualitzada.");
            return NoContent();

        }
    }
}

