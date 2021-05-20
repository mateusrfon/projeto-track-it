import axios from 'axios';

export default function SaveHabit(props) {
    const { reload, setReload, setWait, setCreate, setNewHabit, newHabit, token} = props;
    setWait(true);
        if (newHabit.name.length > 0 && newHabit.days.length > 0) {
            const config = {
                headers: {
                    Authorization: token
                }
            }
            const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', newHabit, config);
            request.then(() => {
                setNewHabit({ name: '', days: []})
                setWait(false);
                setCreate('false');
                setReload(reload + 1);
            });
            request.catch(() => {
                setWait(false);
                alert('algo deu errado.')
            });
        } else {
            alert('Preencha os campos com nome e ao menos 1 dia')
            setWait(false);
        }
}