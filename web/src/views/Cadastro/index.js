import React, { useState}  from 'react';
import {Link, Redirect} from 'react-router-dom';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import Footer from '../../components/Footer';

import * as S from './styles';

function Cadastro() {

    const [user, setUser] = useState();
    const [pass, setPass] = useState();
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [email, setEmail] = useState();
    const [redirect, setRedirect] = useState(false);
    var flag = false;

    async function cadastrarUsuario(){
        if(!user) 
        return alert("Informe o usuário!")
        else if (!pass)
        return alert("Informe a senha!")
        else if (!nome)
        return alert("Informe seu nome!")
        else if (!sobrenome)
        return alert("Informe seu sobrenome!")
        else if (!email)
        return alert("Informe o e-mail!")

        await api.get(`/user/search/all`)
        .then(response => {
            var i;
            for (i=0;i<response.data.length;i++){
                if(response.data[i].user==user){
                    flag=true;
                }
            }
          })

        if(!flag){
        await api.post('/user', {
            user,
            pass,
            nome,
            sobrenome,
            email
        })
        .then( () => {
            alert("Cadastro realizado com sucesso! Redirecionando...")
            setRedirect(true)
        })
        .catch( () =>{
            alert("Algo deu errado!")
        })
    }
        else {
            return alert("Usuário já existe!")
        }}

    return (
        <S.Container>
            <Link to={`/`}><img src={logo}/></Link>
            
            
            {redirect && <Redirect to="/login"/>}
            <S.Content>
                
                <S.ContainerForm>
                    <span>Nome</span>
                    <input type="text" onChange={e => setNome(e.target.value)} value={nome}/>
                    <span>Sobrenome</span>
                    <input type="text" onChange={e => setSobrenome(e.target.value)} value={sobrenome}/>
                    <span>Usuário</span>
                    <input type="text" onChange={e => setUser(e.target.value)} value={user}/>
                    <span>Senha</span>
                    <input type="password" onChange={e => setPass(e.target.value)} value={pass}/>
                    <span>Email</span>
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email}/>
                    <button type="button" onClick={cadastrarUsuario}>Cadastrar !</button>
                </S.ContainerForm>

            </S.Content>
            <Footer />
        </S.Container>
    )
}

export default Cadastro;