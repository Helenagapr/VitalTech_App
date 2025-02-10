import { useState, useEffect } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import { getEpisodiosMedicos } from "../utils/api/episodiosMedicos";
import { getPruebasByDni } from "../utils/api/pruebasDiagnosticas"; // Nueva importación para obtener las pruebas diagnósticas
import { useKeycloak } from "../../auth/provider/KeycloakProvider";
import React from 'react';
import Popup from 'reactjs-popup';
import DiagnosisPopup from "../components/popups/popup-diagnosticos/popupDiagnosticos";
import 'reactjs-popup/dist/index.css';

function DiagnosisRow({ diagnosis }) {
    const [open, setOpen] = useState(false); //para manejar el popup, concretamente si está abierto o cerrado
    const [pruebas, setPruebas] = useState([]); // Estado para almacenar las pruebas diagnósticas asociadas

    useEffect(() => {
        if (open) { 
            // Las pruebas diagnósticas ya vienen dentro del objeto diagnosis
            setPruebas(diagnosis.pruebasDiagnosticas || []);
        }
    }, [open, diagnosis.pruebasDiagnosticas]);
    

    return (
        <div className="diagnostico-row">
            <div className="diagnostico-info">
                <div className="diagnostico-cell" style={{ fontWeight: 'bold' }}>
                    {diagnosis.motivo} 
                </div>
                <div className="diagnostico-cell" style={{ color: 'grey', fontSize: '0.8em' }}>
                    {diagnosis.dataObertura} 
                </div>
                <div className="diagnostico-cell" style={{ fontSize: '0.8em' }}>
                    Estado: {diagnosis.estat} 
                </div>
            </div>
            <div className="diagnostico-button-cell">
                {/*botón para abrir el popup*/}
                <button onClick={() => setOpen(true)}>Ver detalles</button> 
            </div>

            {/* Esto llama al componente popup y le pasa las pruebas obtenidas */}
            <DiagnosisPopup open={open} onClose={() => setOpen(false)} pruebas={pruebas} />
        </div>
    );
}

function DiagnosisList({ diagnosticos, filterName, filterDate, filterCentre }) {
    const filteredDiagnosticos = diagnosticos.filter((diagnosis) =>
        diagnosis.motivo.toLowerCase().includes(filterName.toLowerCase()) &&
        diagnosis.dataObertura.includes(filterDate) &&
        diagnosis.estat.toLowerCase().includes(filterCentre.toLowerCase()) // Aquí usamos el estado en vez de "centro"
    );

    return (
        <div className="diagnostico-table">
            {filteredDiagnosticos.map((diagnosis) => (
                <DiagnosisRow key={diagnosis.id} diagnosis={diagnosis} />
            ))}
        </div>
    );
}

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

export default function Page() {
    const [filterName, setFilterName] = useState('');
    const [filterDate, setFilterDate] = useState('');
    const [filterCentre, setFilterCentre] = useState('');
    const [diagnosticos, setDiagnosticos] = useState([]);
    const { user } = useKeycloak();

    const DNI_PACIENTE = user?.dni || null;
    console.log(DNI_PACIENTE);
    console.log(user);

    useEffect(() => {
        if (user?.dni) {
            const fetchData = async () => {
                try {
                    const episodios = await getEpisodiosMedicos();
                    // Filtrar solo los episodios del paciente con el DNI correcto
                    const diagnosticosPaciente = episodios.filter(ep => ep.dniPacient === user.dni);
                    setDiagnosticos(diagnosticosPaciente);
                } catch (error) {
                    console.error("Error al obtener los episodios médicos:", error);
                }
            };
    
            fetchData();
        }
        // Se ejecutará solo cuando el dni de "user" cambie:
    }, [user?.dni]); 
    
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
