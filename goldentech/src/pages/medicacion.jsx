import { useState, useEffect } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import { getEpisodiosMedicos } from "../utils/api/episodiosMedicos"; // Importa la función para obtener los episodios médicos
import { useKeycloak } from "../../auth/provider/KeycloakProvider"; // Importa useKeycloak
import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import styles from "../styles/pages/medicacion.module.css";

function MedicacionRow({ medicacion, onSelect, isSelected }) {
  return (
    <div
      className={`agenda-rowbox ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(medicacion)}
      style={{
        backgroundColor: isSelected ? '#e0f7fa' : 'white',
        cursor: 'pointer',
      }}
    >
      <div className="agenda-info">
        <p style={{ margin: "0px", color: "rgb(88, 85, 85)", fontFamily: "'Roboto', sans-serif", fontSize: '0.8em' }}>
          {medicacion.dataObertura}
        </p>
        <p style={{ margin: "0px", fontWeight: 'bold', fontFamily: "'Roboto', sans-serif", fontSize: '1.0em' }}>
          {medicacion.recepta} {/* Muestra la receta */}
        </p>
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
  );
}

export default function MedicationPage() {
  const [selectedMedicacion, setSelectedMedicacion] = useState(null);
  const [medicaciones, setMedicacion] = useState([]);
  const { user } = useKeycloak(); // Obtiene el usuario desde Keycloak

  // Obtener el DNI del paciente logueado
  const DNI_PACIENTE = user?.dni || null;

  useEffect(() => {
    // Solo se ejecuta si el usuario tiene DNI
    if (DNI_PACIENTE) {
      const fetchData = async () => {
        try {
          const episodios = await getEpisodiosMedicos(); // Obtiene los episodios médicos
          const userMedicaciones = episodios.filter(ep => ep.dniPacient === DNI_PACIENTE); // Filtra los episodios por el DNI
          setMedicacion(userMedicaciones); // Almacena las medicaciones en el estado
        } catch (error) {
          console.error("Error al obtener episodios médicos:", error);
        }
      };
      fetchData();
    }
  }, [DNI_PACIENTE]); // El hook se ejecutará cada vez que cambie el DNI del usuario

  const handleClose = () => {
    setSelectedMedicacion(null); // Cerrar la caja de información
  };

  const handleCancelMedicacion = () => {
    setMedicacion(medicaciones.filter(medicacion => medicacion !== selectedMedicacion)); // Elimina la medicación seleccionada
    setSelectedMedicacion(null);
  };

  return (
    <>
      <Header />
      <h1 className={styles.agendatitle}>Medicación recetada</h1>
      <div className="agenda-container">
        {/* Aquí pasamos las medicaciones obtenidas */}
        {medicaciones.map(medicacion => (
          <MedicacionRow
            key={medicacion.id}
            medicacion={medicacion}
            onSelect={(medicacion) => setSelectedMedicacion(medicacion)}
            isSelected={selectedMedicacion === medicacion}
          />
        ))}
        {selectedMedicacion && (
          <Box className="cita-info-box" sx={{ marginLeft: 2, padding: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" gutterBottom>{selectedMedicacion.recepta}</Typography>
              <IconButton
                sx={{
                  color: 'grey',
                }}
                onClick={handleClose} // Cerrar el popup
              >
                <CloseIcon />
              </IconButton>
            </div>
            <Typography variant="body1"><strong>Fecha Caducidad:</strong> {selectedMedicacion.dataTancament}</Typography>
            <Typography variant="body1"><strong>Doctor:</strong> {selectedMedicacion.dniMetge}</Typography>
          </Box>
        )}
      </div>
      <Footer />
    </>
  );
}
