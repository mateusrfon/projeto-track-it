import ScreeBody from './ScreenBody';
import styled from 'styled-components';
import { useEffect, useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function History() {
    const { token } = useContext(UserContext);
    const [days, setDays] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: token
            }
        }
        const require = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily', config);
        require.then(response => {
            const data = response.data;
            const newData = [];
            for (let i = 0; i < data.length; i++) {
                newData.push({ data: data[i].day, done: data[i].habits.reduce((acc,e) => (acc && e.done), true) });
            }
            setDays(newData);
        });
    }, []);

    return (
        <ScreeBody>
            <Title>Histórico</Title>
            <Description>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </Description>
            <Calendar />
        </ScreeBody>
    );
}

const Title = styled.h1`
    margin-top: 28px;
    margin-bottom: 17px;
    font-size: 23px;
    color: #126BA5;
`;

const Description = styled.p`
    font-size: 18px;
    color: #666;
    margin-bottom: 17px;
`;