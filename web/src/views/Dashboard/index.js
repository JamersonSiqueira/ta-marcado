import React, { useState, useEffect} from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as S from './styles';
import {Link, Redirect} from 'react-router-dom';
import isConnected from '../../utils/isConnected';
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import {Bar} from "react-chartjs-2";

function Dashboard() {
  const [updateTasks, setUpdateTasks] = useState('today');
  const [username, setUsername] = useState('username');
  const [done, setDone] = useState([]);
  const [bargraph, setBarGraph] = useState([]);
  const [undone, setUndone]= useState([]);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  async function loadStatus(){
    await api.get(`/user/${isConnected}`)
    .then(response => {
      setUsername(response.data.nome+" "+response.data.sobrenome)
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

  function loadGraphs(){
    var array = 
    [done["total"],
    done["padrao"],
    done["esportes"],
    done["alimentacao"],
    done["trabalho"],
    done["social"],
    done["estudos"],
    done["shopping"],
    done["viagens"],
    done["academia"]
  ]
    setBarGraph(array);
  }
  
  useEffect( () => {
    loadStatus();
    loadGraphs();
    if(!isConnected)
    setRedirect(true);
  }, [loading])

  return (
    
    <S.Container>
      {redirect && <Redirect to="/login/"/>}
      <Header onClickNotify={Notificacao}/>
      <LoadingMask loading={loading} text={"Carregando..."}>
        
        <S.Content>
          <S.LeftSide>
        <Bar 
        data={{
          labels: ['Total', 'Padrão', 'Esportes', 'Alimentação', 'Trabalho', 'Social', 'Estudos', 'Compras','Viagens','Academia'],
          datasets: [{
              label: 'Tarefas',
              data: bargraph,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false
        }}
        />
          </S.LeftSide>
        </S.Content>
      </LoadingMask>
      <Footer />
    </S.Container>
  );
}

export default Dashboard;
  