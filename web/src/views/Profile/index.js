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
  const [done, setDone] = useState('x');
  const [notDone, setNotDone] = useState('x');
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);

  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/${isConnected}`)
    .then(response => {
      setTasks(response.data);
    })
  }



  function Notificacao(){
    setFilterActived('late');
  }

  useEffect( () => {
    loadTasks();
    
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
            <span>Tarefas realizadas: {done}</span>
            <S.TasksDiv>
              <S.TasksDivTitle>
              <span class="tipos">Tipos:</span>
            </S.TasksDivTitle>
            <span>Tarefas padrão: </span>
            <span>Esportes: </span>
            <span>Alimentação: </span>
            <span>Social: </span>
            <span>Estudos: </span>
            <span>Compras: </span>
            <span>Viagens: </span>
            <span>Academia: </span>
            </S.TasksDiv>
            </S.LeftSideTasks>
            <S.RightSideTasks>
            <span>Tarefas a concluir: {notDone}</span>
            <S.TasksDiv>
              <S.TasksDivTitle>
              <span class="tipos">Tipos:</span>
            </S.TasksDivTitle>
            <span>Tarefas padrão: </span>
            <span>Esportes: </span>
            <span>Alimentação: </span>
            <span>Social: </span>
            <span>Estudos: </span>
            <span>Compras: </span>
            <span>Viagens: </span>
            <span>Academia: </span>
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
