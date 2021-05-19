import styled from 'styled-components';

export default function WeekDays() {
    return (
        <DaysBox>
            <Days>D</Days>
            <Days>S</Days>
            <Days>T</Days>
            <Days>Q</Days>
            <Days>Q</Days>
            <Days>S</Days>
            <Days>S</Days>
        </DaysBox>
    );
}

const DaysBox = styled.div`
    display: flex;
`;

const Days = styled.div`
    width: 30px;
    height: 30px;
    color: #dbdbdb;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    text-align: center;
    margin-right: 4px;
    :nth-child(2n) {
        color: #fff;
        background-color: #cfcfcf;
        border-color: #cfcfcf;
    }
`;