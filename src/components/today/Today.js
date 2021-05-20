import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';

import ScreenBody from '../ScreenBody';
import ListHabits from './ListHabits';
import Date from './Date';

export default function Today() {
    const { token } = useContext(UserContext);
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: token
            }
        }
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        request.then(response => {
            setHabits(response.data);
        });
    }, [token]);

    return (
        <ScreenBody>
            <Date/>
            <Subtitle>
                Nenhum hábito concluído ainda
            </Subtitle>
            {habits.map(e => <ListHabits key={e.id} habit={e}/>)}
        </ScreenBody>
    );
}

const Subtitle = styled.p`
    color: #BABABA;
    font-size: 18px;
    margin-bottom: 28px;
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