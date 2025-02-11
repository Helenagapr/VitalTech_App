import Popup from "reactjs-popup";
import { useEffect, useState } from "react";

//este es el componente que muestra el popup. recibe 3 props: un boleano que indica si el popup ha de estar abierto o cerrado, una función que
//se ejecuta para cerrar el popup y un array de pruebas diagnósticas:
export default function DiagnosisPopup({ open, onClose, pruebas }) {

    //const. llamada "loading" que se usará para ver si las pruebas aun se están cargando. se incia x defecto en true:
    const [loading, setLoading] = useState(true);

    //se ejecutará esto cada vez que cambie el valor de "pruebas".
    useEffect(() => {
        if (pruebas && pruebas.length > 0) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [pruebas]);

    return (
        //se returnea el popup centrado vertical y horizontalmente. si open es true, estará abierto. el onClose controla cuándo se cierra. react controla
        //internamente el cierre cuando haces clic fuera del popup, y la línea 41 controla cuando le das al botón de "cerrar":
        <Popup open={open} onClose={onClose} position="center center">
            {/*style del popap:*/}
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
