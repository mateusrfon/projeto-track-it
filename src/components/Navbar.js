import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
    const { image } = useContext(UserContext);
    const history = useHistory();

    function logout() {
        localStorage.removeItem('login');
        history.push('/');
    }
    return (
        <Box>
            <h1>TrackIt</h1>
            <img src={image} alt="profile"/>
            <Logout onClick={logout}>Logout</Logout>
        </Box>
    );
};

const Box = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1 {
        font-family: 'Playball';
        font-size: 39px;
        line-height: 49px;
        color: #fff;
        margin-left: 18px;
    }

    img {
        margin-right: 10px;
        width: 51px;
        height: 51px;
        border-radius: 25.5px;
    }
`;

const Logout = styled.div`
    position: fixed;
    top: 60px;
    right: 22px;
    font-size: 8px;
    color: #fff;
`;
