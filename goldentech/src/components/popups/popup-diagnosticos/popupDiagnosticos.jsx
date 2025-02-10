import Popup from "reactjs-popup";
import { useEffect, useState } from "react";

export default function DiagnosisPopup({ open, onClose, pruebas }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (pruebas && pruebas.length > 0) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [pruebas]);

    console.log("Pruebas:", pruebas);

    return (
        <Popup open={open} onClose={onClose} position="center center">
            <div style={{ padding: "20px", background: "#fff", borderRadius: "10px", maxWidth: "400px" }}>
                <h2>Pruebas Diagnósticas</h2>

                {loading ? (
                    <p>Cargando pruebas diagnósticas...</p>
                ) : pruebas.length > 0 ? (
                    pruebas.map((prueba, index) => (
                        <div key={index} style={{ marginBottom: "15px", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
                            <p><strong>Dolencia:</strong> {prueba.dolencia || "No disponible"}</p>
                            <p><strong>ID de episodio médico:</strong> { prueba.episodiMedicId || "No disponible"}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay pruebas diagnósticas asociadas.</p>
                )}

                <button onClick={onClose} style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}>Cerrar</button>
            </div>
        </Popup>
    );
}
