
//usestate: nos permite declarar vars. de estado. devuelve 2 valores: valor del estado actual y setter para actualizarlo. cada vez que se actualiza el estado, se renderiza de nuevo para reflejar el cambio.
//useEffect: se ejecuta después de que el componente se haya renderizado, si no tiene dependencias (vars. que pueden ir cambiando), o si las tiene, cada vez que éstas sean cambiadas. ver info.txt para ejemplo
import { useState, useEffect } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import { getEpisodiosMedicos } from "../utils/api/episodiosMedicos";
import { getPruebasByDni } from "../utils/api/pruebasDiagnosticas"; 
import { useKeycloak } from "../../auth/provider/KeycloakProvider";
import React from 'react';
import Popup from 'reactjs-popup';
import DiagnosisPopup from "../components/popups/popup-diagnosticos/popupDiagnosticos";
import 'reactjs-popup/dist/index.css';

function DiagnosisRow({ diagnosis }) {
    //estado para manejar el popup, concretamente si está abierto o cerrado; por def. empieza cerrado (false)
    const [open, setOpen] = useState(false);
    //estado para manejar las pruebas. empieza vacío:
    const [pruebas, setPruebas] = useState([]); 

    //se actualiza cada vez que cambia el estado del popup o de las pruebas (consts. de arriba). El useEffect en React 
    //permite ejecutar una función después de que el componente se haya renderizado o cuando una de sus dependencias haya cambiado:
    useEffect(() => {
        if (open) { 
            
            //si el popup se abre, metemos en la const. "pruebas" las pruebas diagnosticas de diagnosis.
            setPruebas(diagnosis.pruebasDiagnosticas || []);
        }
    }, [open, diagnosis.pruebasDiagnosticas]); //se ejecuta cuando cambia "open" o el contenido de las pruebas diag.:
    
    //se returnea la estructura de los episodios:
    return (
        <div className="diagnostico-row">
            <div className="diagnostico-info">
                <div className="diagnostico-cell" style={{ fontWeight: 'bold' }}>
                    Motivo episodio médico: {diagnosis.motivo} 
                </div>
                <div className="diagnostico-cell" style={{ color: 'grey', fontSize: '0.8em' }}>
                    Fecha apertura: {diagnosis.dataObertura} 
                </div>
                <div className="diagnostico-cell" style={{ color: 'grey', fontSize: '0.8em' }}>
                    Fecha cierre: {diagnosis.dataTancament} 
                </div>
                <div className="diagnostico-cell" style={{ color: 'grey', fontSize: '0.8em' }}>
                    Receta: {diagnosis.recepta} 
                </div>
                <div className="diagnostico-cell" style={{ fontSize: '0.8em' }}>
                    Estado: {diagnosis.estat} 
                </div>
            </div>
            <div className="diagnostico-button-cell">
                {/*botón para abrir el popup*/}
                <button onClick={() => setOpen(true)}>Ver pruebas</button> 
            </div>

            {/*esto llama al componente popup y le pasa las pruebas obtenidas. además, también recibe como props
            la visibilidad del popup (open) y una función para cerrarlo (onClose): */}
            <DiagnosisPopup open={open} onClose={() => setOpen(false)} pruebas={pruebas} />
        </div>
    );
}

//renderiza la lista de episodios médicos filtrados:
function DiagnosisList({ diagnosticos, filterName, filterDate, filterCentre }) {
    //para filtrar en la caja de búsqueda:
    const filteredDiagnosticos = diagnosticos.filter((diagnosis) =>
        diagnosis.motivo.toLowerCase().includes(filterName.toLowerCase()) &&
        diagnosis.dataObertura.includes(filterDate) &&
        diagnosis.estat.toLowerCase().includes(filterCentre.toLowerCase())
    );

    return (
        <div className="diagnostico-table">
            {/*"map" recorre los elementos de 1 array y los transforma como tú le indiques; en este caso, mostrará todos a no ser
            que hayas puesto algo en la caja de búsqueda para filtrar: */}
            {filteredDiagnosticos.map((diagnosis) => (
                <DiagnosisRow key={diagnosis.id} diagnosis={diagnosis} />
            ))}
        </div>
    );
}

//renderiza la caja de búsqueda. cada vez que el user escribe, actualiza el estado. 
//ejemplo de flujo: 1 El usuario escribe "dolor" en el campo Motivo de DiagnosisFilter.
//2️ El estado filterName se actualiza en Page (ver abajo)
//3️ El componente DiagnosisList recibe el valor actualizado de filterName y filtra los diagnósticos.
//4 Solo se muestran los diagnósticos cuyo motivo incluya "dolor"
function DiagnosisFilter({ filterName, setFilterName, filterDate, setFilterDate, filterCentre, setFilterCentre }) {
    return (
        <div className="diagnostico-searchbox">
            <form>
                <div className="diagnostico-filterbox">
                    <h1 style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Filtrar</h1>
                    <label style={{ fontSize: '0.9em' }}>Motivo</label>
                    <input
                        className="diagnostico-input"
                        type="text"
                        value={filterName}
                        placeholder="Filtrar por motivo"
                        onChange={(e) => setFilterName(e.target.value)}
                    />
                    <label style={{ fontSize: '0.9em' }}>Fecha de apertura</label>
                    <input
                        className="diagnostico-input"
                        type="text"
                        value={filterDate}
                        placeholder="Filtrar por fecha"
                        onChange={(e) => setFilterDate(e.target.value)}
                    />
                    <label style={{ fontSize: '0.9em' }}>Estado</label>
                    <input
                        className="diagnostico-input"
                        type="text"
                        value={filterCentre}
                        placeholder="Filtrar por estado"
                        onChange={(e) => setFilterCentre(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

//componente principal. actua como "wrapper" para diagnosisList y diagnosisFilter. 
//maneja los estados de los filtros y de los episodios (diagnosticos):
export default function Page() {
    //consts. para guardar los estados:
    const [filterName, setFilterName] = useState('');
    const [filterDate, setFilterDate] = useState('');
    const [filterCentre, setFilterCentre] = useState('');
    const [diagnosticos, setDiagnosticos] = useState([]);
    //obtiene el user desde keycloak:
    const { user } = useKeycloak();

    //obtiene el dni del user autenticado:
    const DNI_PACIENTE = user?.dni || null;

    useEffect(() => {
        //si el user tiene DNI... 
        if (user?.dni) { 
            const fetchData = async () => {
                try {
                    //... obtiene sus episodios:
                    const episodios = await getEpisodiosMedicos();
                    const diagnosticosPaciente = episodios.filter(ep => ep.dniPacient === user.dni);
                    //y los guarda en el estado correspondiente:
                    setDiagnosticos(diagnosticosPaciente);
                } catch (error) {
                    console.error("Error al obtener los episodios médicos:", error);
                }
            };
            //se llama a la func. fetchData para hacer lo de arriba:
            fetchData();
        }
        //se ejecuta cuando se camia el dni del usuario. si no vuelve a cambiar, no se ejecutará de nuevo este useEffect:
    }, [user?.dni]); 
    
    //este return es el contenido de toda la página diagnósticos (episodios). incluye footer, header, la caja de búsqueda y la sección de episodios:
    return (
        <>
            <Header />
            <h1 className="diagnostico-title">Diagnósticos</h1>
            <div className="diagnostico-page">
                <DiagnosisList diagnosticos={diagnosticos} filterName={filterName} filterDate={filterDate} filterCentre={filterCentre} />
                <DiagnosisFilter filterName={filterName} setFilterName={setFilterName} filterDate={filterDate} setFilterDate={setFilterDate} filterCentre={filterCentre} setFilterCentre={setFilterCentre} />
            </div>
            <Footer />
        </>
    );
}
