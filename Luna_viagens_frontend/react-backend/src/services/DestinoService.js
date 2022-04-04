import axios from 'axios'

const DESTINO_API_URL = "https://lunaviagens-back.herokuapp.com/api/v1/destinos"

class DestinoService {
    getAllDestinos() {
        return axios.get(DESTINO_API_URL);
    }

    createDestino(destino) {
        return axios.post(DESTINO_API_URL, destino);
    }

    getDestinoById(id) {
        return axios.get(DESTINO_API_URL + "/" + id);
    }

    updateDestino(id, destino) {
        return axios.put(DESTINO_API_URL + "/" + id, destino);
    }

    deleteDestino(id) {
        return axios.delete(DESTINO_API_URL + "/" + id);
    }
}

export default new DestinoService();