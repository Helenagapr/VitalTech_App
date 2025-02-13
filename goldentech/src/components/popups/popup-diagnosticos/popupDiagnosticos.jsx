import Popup from "reactjs-popup";
import { useEffect, useState } from "react";
import styles from "../../../styles/components/popupDiagnosticos.module.css";

//define 1 componente que recibe 3 props: un boleano que indica si el popup está abierto o no, una func. para cerrarlo y 1 array
//de pruebas diagnósticas:
export default function DiagnosisPopup({ open, onClose, pruebas }) {
    return (
        <Popup open={open} onClose={onClose} position="center center">
            <div className={styles.popupContainer}>
                <h2 className={styles.popupHeader}>Pruebas diagnósticas</h2>

                {pruebas && pruebas.length > 0 ? (
                    pruebas.map((prueba, index) => (
                        <div key={index} className={styles.popupItem}>
                            <p><strong>ID pruebas:</strong> {prueba.id || "No disponible"}</p>
                            <p><strong>ID episodio médico de procedencia:</strong> {prueba.episodiMedicId || "No disponible"}</p>
                            <p><strong>Dolencia:</strong> {prueba.dolencia || "No disponible"}</p>
                            <p><strong>Pruebas realizadas:</strong> {prueba.pruebas || "No disponible"}</p>
                            
                        </div>
                    ))
                ) : (
                    <p>No hay pruebas diagnósticas asociadas.</p>
                )}

                <button onClick={onClose} className={styles.popupButton}>Cerrar</button>
            </div>
        </Popup>
    );
}
