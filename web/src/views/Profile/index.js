import React, { useState, useEffect} from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import usericon from '../../assets/Unknown_person.jpg';
import * as S from './styles';
import {Link, Redirect} from 'react-router-dom';
import isConnected from '../../utils/isConnected';
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

function Profile() {
  const [updateTasks, setUpdateTasks] = useState('today');
  const [username, setUsername] = useState('username');
  const [done, setDone] = useState([]);
  const [undone, setUndone]= useState([]);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [conq1, setConq1] = useState(false);
  const [conq2, setConq2] = useState(false);
  const [conq3, setConq3] = useState(false);
  const [conq4, setConq4] = useState(false);

  async function loadStatus(){
    await api.get(`/user/${isConnected}`)
    .then(response => {
      setUsername(response.data.user)
    })
    await api.get(`/task/filter/countdone/${isConnected}`)
    .then(response => {
      setDone(response.data);
    })
    await api.get(`/task/filter/countundone/${isConnected}`)
    .then(response => {
      setUndone(response.data);
    })
    setLoading(false);
  }

  function Notificacao(){
    setUpdateTasks('late');
  }

  function verifyConquest(){
    if(done["total"]>=5){
      setConq1(true)
      setConq2(true)
      setConq3(true)
    } else if(done["total"]>=3){
      setConq1(true)
      setConq2(true)
    } else if(done["total"]>0)
    setConq1(true)
    
    if(done["esportes"]>=3)
    setConq4(true)
  }
  
  useEffect( () => {
    //Carregar tarefas
    loadStatus();
    //Verificar conquistas
    verifyConquest();
    //Função do header
    Notificacao();

    if(!isConnected)
    setRedirect(true);
  }, [done])


  return (
      <S.Container>
        {redirect && <Redirect to="/login/"/>}
      <Header onClickNotify={Notificacao}/>
      <LoadingMask loading={loading} text={"Carregando..."}>
      <S.Content>
      
        <S.LeftSide>
          <S.Title>
            <h3>PERFIL</h3>
          </S.Title>
          <S.Image>
            <img src={usericon} alt="Usuario"></img>
          </S.Image>
          <S.Subtitle>
            <h4>{username}</h4>
          </S.Subtitle>
            <S.ContentTasks>
            <S.LeftSideTasks>
            <span>Tarefas concluidas: {done["total"]}</span>
            <S.TasksDiv>
              <S.TasksDivTitle>
                <S.Span class="tipos">Tipos:</S.Span>
            </S.TasksDivTitle>
                <S.Span>Tarefas padrão: {done["padrao"]}</S.Span>
                <S.Span>Esportes: {done["esportes"]}</S.Span>
                <S.Span>Alimentação: {done["alimentacao"]}</S.Span>
                <S.Span>Trabalho: {done["trabalho"]}</S.Span>
                <S.Span>Social: {done["social"]}</S.Span>
                <S.Span>Estudos: {done["estudos"]}</S.Span>
                <S.Span>Compras: {done["shopping"]}</S.Span>
                <S.Span>Viagens: {done["viagens"]}</S.Span>
                <S.Span>Academia: {done["academia"]}</S.Span>
            </S.TasksDiv> 
            </S.LeftSideTasks>
            <S.RightSideTasks>
            <span type="tipos">Tarefas não concluidas: {undone["total"]}</span>
            <S.TasksDiv>
              <S.TasksDivTitle>
                <S.Span class="tipos">Tipos:</S.Span>
            </S.TasksDivTitle>
                <S.Span>Tarefas padrão: {undone["padrao"]}</S.Span>
                <S.Span>Esportes: {undone["esportes"]}</S.Span>
                <S.Span>Alimentação: {undone["alimentacao"]}</S.Span>
                <S.Span>Trabalho: {undone["trabalho"]}</S.Span>
                <S.Span>Social: {undone["social"]}</S.Span>
                <S.Span>Estudos: {undone["estudos"]}</S.Span>
                <S.Span>Compras: {undone["shopping"]}</S.Span>
                <S.Span>Viagens: {undone["viagens"]}</S.Span>
                <S.Span>Academia: {undone["academia"]}</S.Span>
            </S.TasksDiv> 
            </S.RightSideTasks>
          </S.ContentTasks>
        </S.LeftSide>

        <S.RightSide>
          <S.Title>
            <h3>CONQUISTAS</h3>
          </S.Title>
          {
            loading ?
            <>
            </>
            :
            <S.TasksDiv>
          { conq1==true ?            
            <S.Span>
              Conquista Feita
            </S.Span>
            :
            <S.Span>
              Conquista Não foi feita
            </S.Span>
            }
            { conq2==true ?            
            <S.Span>
              Conquista Feita
            </S.Span>
            :
            <S.Span>
              Conquista Não foi feita
            </S.Span>
            }
            { conq3==true ?            
            <S.Span>
              Conquista Feita
            </S.Span>
            :
            <S.Span>
              Conquista Não foi feita
            </S.Span>
            }
            { conq4==true ?            
            <S.Span>
              Conquista Feita
            </S.Span>
            :
            <S.Span>
              Conquista Não foi feita
            </S.Span>
            }
          </S.TasksDiv>}
        </S.RightSide>
      </S.Content>
      </LoadingMask>
      <Footer />
      
      </S.Container>
    );
}

export default Profile;
