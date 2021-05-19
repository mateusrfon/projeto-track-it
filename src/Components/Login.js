import styled from 'styled-components';

import Loader from "react-loader-spinner";
import Logo from '../images/Logo.svg';

import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login({ type }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [token, setToken] = useState('');
    const [wait, setWait] = useState(false);
    const history = useHistory();

    function Signin() {
        setWait(true);
        const data = { email, name: username, image: profilePicture, password };
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', data);
        request.then(() => {
            setPassword('');
            setWait(false);
            history.push("/");
        })
        request.catch(() => {
            setWait(false);
            alert('Algo deu errado.');
        });
    }

    function Login() {
        setWait(true);
        const data = { email, password };
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', data);
        request.then(response => {
            setToken(response.token);
            setWait(false);
            history.push("/hoje");
        })
        request.catch(() => {
            setWait(false);
            alert('Algo deu errado.');
        });
    }

    return (
        <Body>
            <TrackIt src={Logo} alt="Logo"/>

            <Input disabled={wait} type="text" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <Input disabled={wait} type="password" placeholder='senha' value={password} onChange={e => setPassword(e.target.value)}/>
            
            <Input disabled={wait} kindOf={type} type="text" placeholder='nome' value={username} onChange={e => setUsername(e.target.value)}/>
            <Input disabled={wait} kindOf={type} placeholder='foto' value={profilePicture} onChange={e => setProfilePicture(e.target.value)}/>
            
            {type === 'login' ? 
                <Btn onClick={Login}>{wait ? 
                    <Loader
                        type="ThreeDots"
                        color="#fff"
                        height={10}
                        width={100}
                        timeout={3000} //3 secs
                    /> : 'Entrar'}
                </Btn> : 
                <Btn onClick={Signin}>{wait ? 
                    <Loader
                        type="ThreeDots"
                        color="#fff"
                        height={10}
                        width={100}
                        timeout={3000} //3 secs
                    />  : 'Cadastrar'}
                </Btn>
            }
            
            <Question>
                {type === 'login' ?
                    <Link to="/cadastro" style={{ color: 'inherit' }}>'Não tem uma conta? Cadastre-se!'</Link> : 
                    <Link to="/" style={{ color: 'inherit' }}>'Já tem uma conta? Faça login!'</Link>
                }
            </Question>
        </Body>
    );
}

//Styled-Components
const Body = styled.div`
    height: 100vh;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 68px 36px;
`;

const TrackIt = styled.img`
    width: 180px;
    height: 178px;
    margin-bottom: 32.5px;
`;

const Input = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    margin-bottom: 6px;
    font-size: 20px;
    line-height: 25px;
    ::placeholder {
        color: #D5D5D5;
        opacity: 1;
    }
    :nth-of-type(3),:nth-of-type(4) {
        display: ${props => props.kindOf === 'signin' ? 'initial' : 'none'};
    }
`; 

const Btn = styled.button`
    width: 100%;
    height: 45px;
    border-radius: 5px;
    font-size: 21px;
    line-height: 26px;
    color: #FFF;
    background-color: #52B6FF;
`;

const Question = styled.p`
    font-size: 14px;
    line-height: 17px;
    color: #52B6FF;
    text-decoration: underline;
    margin-top: 25px;
`;