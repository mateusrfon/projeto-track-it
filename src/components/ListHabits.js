import styled from 'styled-components';
import trash from '../images/Trash.svg'

import WeekDays from './WeekDays';
import DeletHabit from './DeletHabit';

export default function ListHabits({ habits, token }) {
    if (habits.length > 0) {
        return (
            <>
                {habits.map((e) => {
                    return (
                        <HabitsBox key={e.id}>
                            <p>{e.name}</p>
                            <WeekDays days={e.days}/>
                            <img src={trash} onClick={() => DeletHabit(e.id, token)} alt="trash-icon"/>
                        </HabitsBox>
                    );
                })}
            </>
        );
    }
    return (
        <Message>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </Message>
    );
}

const Message = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666;
`;

const HabitsBox = styled.div`
    width: 100%;
    height: 91px;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    font-size: 20px;
    color: #666;
    justify-content: space-between;
    padding: 13px 0 15px 15px;
    img {
        position: absolute;
        top: 11px;
        right: 10px;
        width: 13px;
        height: 15px;
    }
`;