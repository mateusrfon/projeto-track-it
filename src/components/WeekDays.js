import styled from 'styled-components';

export default function WeekDays({ days, create, newHabit, setNewHabit, wait }) {
    function addDay(newDay) {
        if (create === 'true' && !wait) {
            if (!newHabit.days.includes(newDay)) {
                newHabit.days.push(newDay);
            } else {
                newHabit.days = newHabit.days.filter(e => e !== newDay);
            }
            setNewHabit({ ...newHabit });   
        }
    }

    return (
        <DaysBox>
            <Days day={days.includes(0)} onClick={() => addDay(0)}>D</Days>
            <Days day={days.includes(1)} onClick={() => addDay(1)}>S</Days>
            <Days day={days.includes(2)} onClick={() => addDay(2)}>T</Days>
            <Days day={days.includes(3)} onClick={() => addDay(3)}>Q</Days>
            <Days day={days.includes(4)} onClick={() => addDay(4)}>Q</Days>
            <Days day={days.includes(5)} onClick={() => addDay(5)}>S</Days>
            <Days day={days.includes(6)} onClick={() => addDay(6)}>S</Days>
        </DaysBox>
    );
}

const DaysBox = styled.div`
    display: flex;
`;

const Days = styled.div`
    width: 30px;
    height: 30px;
    color: ${props => props.day ? '#fff' : '#dbdbdb'};
    background-color: ${props => props.day ? '#cfcfcf' : '#fff'};
    border: 1px solid ${props => props.day ? '#cfcfcf' : '#D5D5D5'};
    border-radius: 5px;
    text-align: center;
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;