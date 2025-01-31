const API_URL = 'https://localhost:7200/api';

export const getPruebasByDni = async (dniPacient) => {
    try {
        const response = await fetch(`${API_URL}/PruebasDiagnosticas`);
        if (!response.ok) {
            throw new Error('Error al obtener las pruebas diagnósticas.');
        }
        const pruebas = await response.json();

        //filtrar en el front por DNI
        return pruebas.filter(prueba => prueba.dniPacient === dniPacient);
    } catch (error) {
        console.error(error);
        return [];
    }
};