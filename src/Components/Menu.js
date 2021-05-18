import styled from 'styled-components';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu() {
    const percentage = 66;
    return (
        <MenuStyled>
            <p>Hábitos</p>

            <HojeCircle>
                <CircularProgressbarWithChildren value={percentage} background backgroundPadding={6}  styles={buildStyles(HojeStyle)}>
                    Hoje
                </CircularProgressbarWithChildren>
            </HojeCircle>

            <p>Histórico</p>
        </MenuStyled>
    );
}

const MenuStyled = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #FFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    color: #FFF;
    p {
        color: #52B6FF;
    }
`;

const HojeCircle = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 45.5px;
`;

const HojeStyle = {
    backgroundColor: "#52B6FF",
    textColor: "#fff",
    pathColor: "#fff",
    trailColor: "transparent"
  };