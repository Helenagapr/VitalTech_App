const API_URL = 'https://localhost:7200/api';

export const getEpisodiosMedicos = async () => {
    const response = await fetch(`${API_URL}/EpisodiMedic`);
    if (!response.ok) {
        throw new Error('Error al obtener los episodios médicos.');
    }
    return await response.json();
};
