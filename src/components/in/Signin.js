import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import Loader from "react-loader-spinner";
import Logo from '../../images/Logo.svg';
import { InBody, TrackIt, Input, Btn, Question } from './Styles';

export default function Signin() {
    const [data, setData] = useState({ email: '', name: '', image: '', password: '' })
    const { email, name, image, password } = data;
    const [wait, setWait] = useState(false);
    const history = useHistory();

    function Signup(event) {
        event.preventDefault();
        setWait(true);
        const newData = { email, name, image, password };
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', newData);
        request.then(() => {
            setData({ email: '', name: '', image: '', password: '' });
            setWait(false);
            history.push("/");
        })
        request.catch(() => {
            setWait(false);
            alert('Algo deu errado.');
        });
    }

    return (
        <InBody>
            <TrackIt src={Logo} alt="Logo"/>

            <form onSubmit={Signup}>
                <Input required disabled={wait} type="email" placeholder='email' value={email} onChange={e => setData({ ...data, email: e.target.value})}/>
                <Input required disabled={wait} type="password" placeholder='senha' value={password} onChange={e => setData({ ...data, password: e.target.value})}/>
                <Input required disabled={wait} type="text" placeholder='nome' value={name} onChange={e => setData({ ...data, name: e.target.value})}/>
                <Input required disabled={wait} placeholder='foto' value={image} onChange={e => setData({ ...data, image: e.target.value})}/>
                <Btn>{wait ? 
                    <Loader
                        type="ThreeDots"
                        color="#fff"
                        height={10}
                        width={100}
                        timeout={3000} //3 secs
                    />  : 'Cadastrar'}
                </Btn>
            </form>
            <Question>
                <Link to="/">'Já tem uma conta? Faça login!'</Link>
            </Question>
        </InBody>
    );
}