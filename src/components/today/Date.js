import dayjs from 'dayjs';
import styled from 'styled-components';

export default function Date() {
        const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
        const day = dayjs().day();
        const today = days[day] + ', ' + dayjs().format('DD/MM');
        return (
            <DateStyle>
                {today}
            </DateStyle>
            );
}

const DateStyle = styled.div`
    font-size: 23px;
    color: #126BA5;
    margin-top: 28px;
`;