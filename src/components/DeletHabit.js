import axios from 'axios';

export default function DeletHabit(id, token) {
    const config = {
        headers: {
            Authorization: token
        }
    }
    
    if (window.confirm('Você realmente deseja deletar?')) {
        const require = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
        require.then(() => alert('Deletado com sucesso.') )
        require.catch(() => alert('Algo deu errado.'))
    }
}