import ScreeBody from './ScreenBody';
import styled from 'styled-components';

export default function History() {
    return (
        <ScreeBody>
            <Title>Histórico</Title>
            <Description>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </Description>
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
`;