import styled from 'styled-components';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import HabitsContext from '../../contexts/HabitsContext';
import Loader from "react-loader-spinner";

import ScreenBody from '../ScreenBody';
import ListHabits from './ListHabits';
import WeekDays from './WeekDays';
import SaveHabit from './SaveHabit';

export default function Habits({ setHabitsRatio }) {
    const [habits, setHabits] = useState([]);
    const [create, setCreate] = useState('false');
    const [newHabit, setNewHabit] = useState({ name: '', days: [] });
    const { token } = useContext(UserContext);
    const habitsContext = useContext(HabitsContext);
    const [wait, setWait] = useState(false);
    const [reload, setReload] = useState(0);

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
    }, [token, reload]);

    function createHabit() {
        setCreate('true');
    }

    function cancelHabit() {
        if (!wait) {
            setCreate('false');
        }
    }

    const propsSaveHabit = { reload, setReload, setWait, setCreate, setNewHabit, newHabit, token, setHabitsRatio, habitsContext};

    return (
        <ScreenBody>
            <AddHabits>
                <p>Meus hábitos</p>
                <div onClick={createHabit}>+</div>
            </AddHabits>

            <NewHabit display={create}>
                <input disabled={wait} placeholder='nome do hábito' onChange={e => setNewHabit({ ...newHabit, name: e.target.value})} value={newHabit.name}/>
                <WeekDays days={newHabit.days} create={create} newHabit={newHabit} setNewHabit={setNewHabit} wait={wait}/>
                <Btns>
                    <p onClick={cancelHabit}>Cancelar</p>
                    <div onClick={() => SaveHabit(propsSaveHabit)}>
                        {wait ? 
                            <Loader
                                type="ThreeDots"
                                color="#fff"
                                height={10}
                                width={100}
                                timeout={3000} //3 secs
                            /> 
                            : 'Salvar'
                        }
                    </div>
                </Btns>
            </NewHabit>

            <ListHabits token={token} habits={habits} setReload={setReload} reload={reload} setHabitsRatio={setHabitsRatio}/>
        </ScreenBody>
    );
}

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

const NewHabit = styled.div`
    display: ${props => props.display === 'true' ? 'flex' : 'none'};
    width: 340px;
    height: 180px;
    background-color: #fff;
    margin-bottom: 29px;
    border-radius: 5px;
    flex-direction: column;
    padding: 18px 18px 0 19px;
    input {
        border: 1px solid #d4d4d4;
        height: 45px;
        border-radius: 5px;
        padding: 9px 0 11px 11px;
        margin-bottom: 8px;
        font-size: 20px;
        color: #666;
        ::placeholder {
            color: #dbdbdb;
        }
    }
`;

const Btns = styled.div`
    margin-top: 29px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    p {
        font-size: 16px;
        color: #52B6FF;
        margin-right: 23px;
    }
    div {
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }
`;