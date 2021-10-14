import axios from 'axios';

//abre conexão com a api
export const api = axios.create(
    {
        //npx json-server --watch -p 5000 server.json
        baseURL: 'http://localhost:5000',
    }
)

//faz a busca e espera ser respondido
export const busca = async (url, setDado) => {
    const resposta = await api.get(url);
    setDado(resposta.data)
}
