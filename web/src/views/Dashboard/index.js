import React, { useState, useEffect} from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as S from './styles';
import {Link, Redirect} from 'react-router-dom';
import isConnected from '../../utils/isConnected';
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import {Bar, Line} from "react-chartjs-2";
import Chart from './Chart';

function Dashboard() {
  const [updateTasks, setUpdateTasks] = useState('today');
  const [username, setUsername] = useState('username');
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState([]);
  const [bargraph, setBarGraph] = useState([]);
  const [undone, setUndone]= useState([]);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [labelsgrafico, setLabelsGrafico] = useState([]);
  const [chart, setChart] = useState({});
  var labels;
  var taskdata;

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

  async function loadTasks(){
    await api.get(`/task/filter/all/${isConnected}`)
    .then(response => {
      setTasks(response.data);
      setChart({
        labels: tasks.map(function(e){
          return e.when;
        }),
        datasets: [
          {
            label: "Tarefas",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: tasks.map(function(e){
              return e.type;
            })
          }
        ]
      });
    })
  }

  function Notificacao(){
    setUpdateTasks('late');
  }

  function loadGraphs(){
    var array = 
    [done["padrao"],
    done["esportes"],
    done["alimentacao"],
    done["trabalho"],
    done["social"],
    done["estudos"],
    done["shopping"],
    done["viagens"],
    done["academia"],
    done["total"]
  ]
    setBarGraph(array);
  }
  
  useEffect( () => {
    loadTasks();
    loadStatus();
    loadGraphs();

    console.log('taskdata: ')
    console.log(taskdata)
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
        <Chart data={chart}/>
          </S.LeftSide>
          <S.RightSide>
          <Bar 
        data={{
          labels: ['Padrão', 'Esportes', 'Alimentação', 'Trabalho', 'Social', 'Estudos', 'Compras','Viagens','Academia', 'Total'],
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
          maintainAspectRatio: false,
        }}
        />
          </S.RightSide>
        </S.Content>
      </LoadingMask>
      <Footer />
    </S.Container>
  );
}

export default Dashboard;
  