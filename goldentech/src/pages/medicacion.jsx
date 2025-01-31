import Footer from "../components/footer/Footer";
import Header from "../components/header/header";
import styles from "../styles/pages/medicacion.module.css"
import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const MedicacionList = [
    { key: 1, medicamento: "Ibuprofeno", dosis: "1 cada 6h", caducidadPrescripcion: "29-12-2027", doctorRecetado: "Juan Luis Lopez" }
];

function MedicacionRow({medicacion, onSelect, isSelected}){
    return(
        <div className={`agenda-rowbox ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect(medicacion)} // Cambiar la cita seleccionada al hacer clic
            style={{
                backgroundColor: isSelected ? '#e0f7fa' : 'white', // Fondo diferente si está seleccionada
                cursor: 'pointer', // Añadir un cursor de mano para indicar interactividad
            }}>
            <div className="agenda-info">
                <p style={{margin: "0px", color: "rgb(88, 85, 85)", fontFamily: "'Roboto', sans-serif", fontSize: '0.8em'}}>{medicacion.caducidadPrescripcion}</p>
                <p style={{margin: "0px", fontWeight: 'bold', fontFamily: "'Roboto', sans-serif", fontSize: '1.0em'}}>{medicacion.medicamento}</p>
                <p style={{margin: "0px", fontFamily: "'Roboto', sans-serif", fontSize: '1.0em'}}>{medicacion.dosis}</p>
            </div>
            <div className="agenda-button">
                <IconButton 
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                        },
                        width: 40,
                        height: 40,
                    }}
                    onClick={() => onSelect(medicacion)} 
                >
                    <AddIcon />
                </IconButton>
            </div>
        </div>
    )
}

function ListaMedicacion({medicaciones, onSelect, selectedMedicacion}){
    
    const rows = []
    
    medicaciones.forEach((medicacion) => {
        rows.push(
            <MedicacionRow medicacion={medicacion} key={medicacion.key} onSelect={onSelect} isSelected={selectedMedicacion === medicacion}/>
        )
    })
    return(
        <div className="agenda-list">
            {rows}
        </div>
    )
}


export default function MedicationPage(){
    const [selectedMedicacion, setSelectedMedicacion] = useState(null);
    const [medicaciones, setMedicacion] = useState(MedicacionList);

    const handleClose = () => {
        setSelectedMedicacion(null); // Cerrar la caja de información
    };


    const handleCancelMedicacion = () => {
        // Eliminar la cita seleccionada de la lista
        setMedicacion(medicaciones.filter(medicacion => medicacion !== selectedMedicacion));
        setSelectedMedicacion(null); // Opcional: cerrar la caja de información después de eliminar
    };

    return (
        <>
            <Header />
            <h1 className={styles.agendatitle}>Agenda</h1>
            <div className="agenda-container">
                <ListaMedicacion medicaciones={medicaciones} onSelect={(medicacion) => setSelectedMedicacion(medicacion)} selectedMedicacion={selectedMedicacion}/>
                {selectedMedicacion && (
                    <Box className="cita-info-box" sx={{marginLeft: 2, padding: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9'}}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="h6" gutterBottom>{selectedMedicacion.medicamento}</Typography>
                            <IconButton
                                sx={{
                                    color: 'grey',
                                }}
                                onClick={handleClose} // Llamar a la función handleClose para cerrar la caja
                            >
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <Typography variant="body1"><strong>Fecha Caducidad:</strong> {selectedMedicacion.caducidadPrescripcion}</Typography>
                        <Typography variant="body1"><strong>Dosis:</strong> {selectedMedicacion.dosis}</Typography>
                        <Typography variant="body1"><strong>Doctor:</strong> {selectedMedicacion.doctorRecetado}</Typography>
                        <button className={styles.button_cell} onClick={handleCancelMedicacion}>Cancelar medicacion</button>
                        <button className={styles.button_cell} onClick={handleCancelMedicacion}>Aplazar caducidad</button>
                    </Box>
                )}
            </div>
            
            <Footer />
        </>
    )
    
}