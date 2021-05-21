import styled from 'styled-components';
import vector from '../../images/V.svg';
import { useContext } from 'react';
import axios from 'axios';

import UserContext from '../../contexts/UserContext';

export default function ListHabits({ habit, reload, setReload }) {
    const { token } = useContext(UserContext);
    const newRecord = (habit.highestSequence > 0) && (habit.highestSequence === habit.currentSequence);
    
    function habitCheck() {
        const config = {
            headers: {
                Authorization: token
            }
        }
        if (!habit.done) {
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {}, config);
            request.then(() => setReload(reload + 1));
        } else {
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, {}, config);
            request.then(() => setReload(reload + 1));
        }
    }
    
    return (
        <HabitBox>
            <div>
                <h1>{habit.name}</h1>
                <Status active={habit.done.toString()}>
                    Sequência atual: <span>{habit.currentSequence} dias</span>
                </Status>
                <Status active={newRecord.toString()}>
                    Seu recorde: <span>{habit.highestSequence} dias</span>
                </Status>
            </div>
            <Check active={habit.done.toString()} onClick={habitCheck}>
                <img src={vector} alt="check-box"/>
            </Check>
        </HabitBox>
    );
}

const HabitBox = styled.div`
    width: 100%;
    height: 94px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 13px 13px 12px 15px;
    div {
        display: flex;
        flex-direction: column;
        font-size: 20px;
        color: #666;
        h1 {
            margin-bottom: 7px;
        }
    }
`;

const Status = styled.p`
    font-size: 13px;
    span {
        color: ${props => props.active === 'true' ? '#8FC549' : '#666'};
    }
`;

const Check = styled.button`
        width: 69px;
        height: 69px;
        border-radius: 5px;
        background-color: ${props => props.active === 'true' ? '#8FC549' : '#E7E7E7'};
        color: #fff;
`;