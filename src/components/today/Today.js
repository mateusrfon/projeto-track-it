import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../../contexts/UserContext';
import HabitsContext from '../../contexts/HabitsContext';
import styled from 'styled-components';

import ScreenBody from '../ScreenBody';
import ListHabits from './ListHabits';
import Date from './Date';

import { useHistory } from 'react-router-dom';

export default function Today({ setHabitsRatio }) {
    const { token } = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const [reload, setReload] = useState(0);
    const {habitsDone, habitsLength} = useContext(HabitsContext);
    const history = useHistory();
    useEffect(() => {
        const config = {
            headers: {
                Authorization: token
            }
        }
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        request.then(response => {
            setHabits(response.data);
            const ratio = { 
                habitsDone: response.data.reduce((acc,e) => {
                                if (e.done) { 
                                    return acc + 1; 
                                } 
                                return acc 
                            }, 0),
                habitsLength: response.data.length,
            }
            setHabitsRatio(ratio);
        });
        request.catch(() => {
            history.push('/');
        });
    }, [token, reload]);

    return (
        <ScreenBody>
            <Date/>
            <Subtitle>
                { (habitsDone === 0) ? 'Nenhum hábito concluído ainda' : 
                    <span>
                        {((habitsDone/habitsLength)*100).toFixed(0)}% dos hábitos concluídos
                    </span>
                }
            </Subtitle>
            {habits.map(e => <ListHabits key={e.id} habit={e} reload={reload} setReload={setReload}/>)}
        </ScreenBody>
    );
}

const Subtitle = styled.p`
    color: #BABABA;
    font-size: 18px;
    margin-bottom: 28px;
    span {
        color: #8FC549;
    }
`;
/*
[
    {
        "id": 3, // id do hábito
        "name": "Acordar", // nome do hábito
        "done": true, // se foi feito ou não
        "currentSequence": 1, // sequência atual
        "highestSequence": 1 // sequência recorde
    }
]*/