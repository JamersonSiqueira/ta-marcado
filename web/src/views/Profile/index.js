import React, { useState, useEffect} from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import usericon from '../../assets/Unknown_person.jpg';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';
import * as S from './styles';
import {Link, Redirect} from 'react-router-dom';
import isConnected from '../../utils/isConnected';

function Profile() {
  const [filterActived, setFilterActived] = useState('today');
  const [username, setUsername] = useState('username');
  const [done, setDone] = useState([]);
  const [undone, setUndone]= useState([]);
  const [redirect, setRedirect] = useState(false);

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
  }



  function Notificacao(){
    setFilterActived('late');
  }

  useEffect( () => {
    loadStatus();
    if(!isConnected)
    setRedirect(true);
  }, [filterActived])


  return (
      <S.Container>
        {redirect && <Redirect to="/login/"/>}
      <Header onClickNotify={Notificacao}/>
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
        <span>direita</span>
        </S.RightSide>
      </S.Content>
      <Footer />
      
      </S.Container>
    );
}

export default Profile;
