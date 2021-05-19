import styled from 'styled-components';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';

import ListHabits from './ListHabits';

export default function Habits() {
    const [habits, setHabits] = useState([]);
    const { token } = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: token
            }
        }
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        request.then(response => {
            setHabits(response.data);
        });
    }, [token]);

    return (
        <HabitsBody>
            <AddHabits>
                <p>Meus hábitos</p>
                <div>+</div>
            </AddHabits>
            <ListHabits habits={habits}/>
        </HabitsBody>
    );
}

const HabitsBody = styled.div`
    width: 100%;
    height: calc(100vh - 140px);
    margin-top: 70px;
    background-color: #F2F2F2;
    padding: 0 18px 0 20px;
    display: flex;
    flex-direction: column;
`;

const AddHabits = styled.div`
    display: flex;
    margin-top: 25px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    p {
        font-size: 23px;
        color: #126BA5;
    }
    div {
        background-color: #52B6FF;
        width: 40px;
        height: 35px;
        border-radius: 4.5px;
        font-size: 27px;
        color: #fff;
        display: flex;
        justify-content: center;
    }
`;