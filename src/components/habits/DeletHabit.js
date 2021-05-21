import axios from 'axios';
import dayjs from 'dayjs';

export default function DeletHabit(id, days, token, reload, setReload, habitsContext, setHabitsRatio) {
    const { habitsDone, habitsLength } = habitsContext;

    const config = {
        headers: {
            Authorization: token
        }
    }
    
    if (window.confirm('Você realmente deseja deletar?')) {
        const require = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        require.then(response => {
            const todayDoneIds = response.data.filter(e => e.done).map(e => e.id);
            if (days.includes(dayjs().day())) {
                const done = todayDoneIds.includes(id) ? habitsDone - 1 : habitsDone;
                setHabitsRatio({ habitsDone: done, habitsLength: habitsLength - 1 })
            }
            const require = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
            require.then(() => setReload(reload + 1));
            require.catch(() => alert('Algo deu errado.'));
        });
    }
}