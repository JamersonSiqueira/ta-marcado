import React, { useState}  from 'react';
import {Redirect} from 'react-router-dom';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import Footer from '../../components/Footer';

import * as S from './styles';

function Login() {

    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();
    const [redirect, setRedirect] = useState(false);

    async function verifyLogin(){
        await api.get(`/user/search/all`)
        .then(response => {
            var i;
            for (i=0;i<response.data.length;i++){
                if(response.data[i].user==login){
                    if(response.data[i].pass==senha){
                        let id = response.data[i]._id
                        localStorage.setItem('@tamarcado/userid',id);
                        setRedirect(true);
                        window.location.reload();
                    } else {
                        alert('Usuário ou senha incorretos! ');
                    }
                }
            }
            if(!localStorage.getItem('@tamarcado/userid')){
                alert('Usuário não localizado!')
            }
          })
    }

    return (
        <S.Container>
            {redirect && <Redirect to="/"/>}
            <S.Content>
                <img src={logo}/>
                <h1>Entre no aplicativo!</h1>
                <S.ValidationCode>
                    <span>Login</span>
                    <input type="text" onChange={e => setLogin(e.target.value)} value={login}/>
                    <span>Senha</span>
                    <input type="password" onChange={e => setSenha(e.target.value)} value={senha}/>
                    <button type="button" onClick={verifyLogin}>Entrar !</button>
                </S.ValidationCode>

            </S.Content>
            <Footer />
        </S.Container>
    )
}

export default Login;