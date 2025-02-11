
//TODO ESTO NO SE USA, era para testear fetches de la api

import { useEffect, useState } from "react";
import { fetchPacientById, fetchPacientes } from "../utils/api/pacientes"; 
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";


export default function Pacientes() {

  //esto no son variables, son STATES. en react, los states son como variables que pueden hacer que se actualice la interfaz cuando su contenido cambia.
  //en este caso, el nombre de la const. es pacientes, le damos un setter y el useState sirve para  inicializarlo como un array vacio:
  const [pacientes, setPacientes] = useState([]); 
  const [episodios, setEpisodios]=useState([]);

  const [error, setError] = useState(null);

  //el use effect hace que se ejecute esto solo 1 vez cuando se MONTA el componente, entendiendo por montar exclusivamente la 1a renderización
  //del componente. por ej, cuando pulsas en el botón "pacientes" desde "main", es en ese momento cuando se ejecuta el useEffect y ya no más
  useEffect(() => {
    const obtenerPacientes = async () => {
      try {
        //se llama a la func. fetchP. del servicio para guardar en "data" toda la info de todos los pacientes (es una movida de axios)
        const data = await fetchPacientes();
        setPacientes(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const obtenerEpisodios = async () => {
      try {
        const data = await fetchPacientById("07495694V");
        //extraemos de data sólo los episodios; si data.episodisMedics existe, se hace el setEpisodios. si no, se deja vacío para evitar errores
        setEpisodios(data.episodisMedics || []); 
      } catch (error) {
        setError(error.message);
      }
    };

    obtenerPacientes();
    obtenerEpisodios();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!pacientes.length) return <div>Cargando...</div>;

  return (
    <div>
      <Header />
      <h1>Lista de Pacientes</h1>
      <table className="tablaPacientes">
        <thead>
          <tr>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Primer apellido</th>
            <th>Segundo apellido</th>
            <th>Núm. SS</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.dni}>
              <td className="casillaPacientes">{paciente.dni}</td>
              <td>{paciente.nom}</td>
              <td>{paciente.cognom1}</td>
              <td>{paciente.cognom2}</td>
              <td>{paciente.numSS}</td>
            </tr>
          ))}
        </tbody>
        </table>

        <br></br>
      <br></br>

      <h2>Episodios médicos del paciente 07495694V</h2>
      <div>
        {/* esto comprueba si el usuario tiene más de 0 episodios, si es así los imprime; si no, mensaje de "no hay" */}
        {episodios.length > 0 ? (
          <ul>
            {episodios.map((episodio, index) => (
              <li key={index}>
                <strong>Motivo:</strong> {episodio.motivo} <br />
                <strong>Fecha de apertura:</strong> {episodio.dataObertura}{" "}
                <br />
                <strong>Estado:</strong> {episodio.estat}
                <br></br>
                <br></br>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay episodios médicos para este paciente.</p>
        )}
      </div>


     
      <Footer />
    </div>
  );
}