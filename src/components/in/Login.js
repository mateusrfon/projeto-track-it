import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import Loader from "react-loader-spinner";
import Logo from '../../images/Logo.svg';
import { InBody, TrackIt, Input, Btn, Question } from './Styles';

export default function Login({ setUserInfo }) {
    const [data, setData] = useState({ email: '', password: '' });
    const { email, password } = data;
    const [wait, setWait] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setWait(true);
        const newData = JSON.parse(localStorage.getItem('login'));
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', newData);
        request.then(response => {
            const userInfo = { token: `Bearer ${response.data.token}`, image: response.data.image };
            setUserInfo(userInfo);
            setWait(false);
            history.push("/hoje");
        })
        request.catch(() => {
            setWait(false);
        });
    }, [])

    function Login(event) {
        event.preventDefault();
        setWait(true);
        const newData = { email, password };
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', newData);
        request.then(response => {
            const userInfo = { token: `Bearer ${response.data.token}`, image: response.data.image };
            setUserInfo(userInfo);
            setWait(false);
            localStorage.setItem('login', JSON.stringify(newData));
            history.push("/hoje");
        })
        request.catch(() => {
            setWait(false);
            alert('Algo deu errado.');
        });
    }

    return (
        <InBody>
            <TrackIt src={Logo} alt="Logo"/>
            <form onSubmit={Login}>
                <Input required disabled={wait} type="email" placeholder='email' value={email} onChange={e => setData({ ...data, email: e.target.value})}/>
                <Input required disabled={wait} type="password" placeholder='senha' value={password} onChange={e => setData({ ...data, password: e.target.value})}/>
                <Btn>{wait ? 
                    <Loader
                        type="ThreeDots"
                        color="#fff"
                        height={10}
                        width={100}
                        timeout={3000} //3 secs
                    /> : 'Entrar'}
                </Btn>
            </form>
            <Question>
                <Link to="/cadastro">'Não tem uma conta? Cadastre-se!'</Link>
            </Question>
        </InBody>
    );
}