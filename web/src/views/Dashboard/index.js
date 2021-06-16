import React, { useState, useEffect} from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as S from './styles';
import {Redirect} from 'react-router-dom';
import isConnected from '../../utils/isConnected';
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import Chart from './Chart';
import ChartBar from './ChartBar'

function Dashboard() {
  const [updateTasks, setUpdateTasks] = useState('today');
  const [typeTasks, setTypeTasks] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState([]);
  const [bargraph, setBarGraph] = useState([]);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [chart, setChart] = useState({});
  const [bar, setBar] = useState({});
  const [labelLine, setLabelLine] = useState([]);
  const [countarray, setCountarray] = useState([]);

  async function loadStatus(){
    await api.get(`/task/filter/countdone/${isConnected}`)
    .then(response => {
      setDone(response.data);
    })
    setLoading(false);
  }

  async function loadTasks(){
    await api.get(`/task/dashresults/${isConnected}/${typeTasks}`)
    .then(response => {
      setTasks(response.data);
      generateArray(response.data);
      setChart({
        labels: labelLine,
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
            scaleStartValue : 0 ,
            data: countarray
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
    setBar({
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
    })
  }

  function generateArray(data){
    var labels = 
    [data["0"].day,
    data["1"].day,
    data["2"].day,
    data["3"].day,
    data["4"].day,
    data["5"].day,
    data["6"].day,
  ]
  setLabelLine(labels);
  var contadores = 
    [data["0"].count,
    data["1"].count,
    data["2"].count,
    data["3"].count,
    data["4"].count,
    data["5"].count,
    data["6"].count,
  ]
    setCountarray(contadores);
  }

  function trocarTipo(e){
    setTypeTasks(e.target.value);
    setLoading(true);
  }

  
  useEffect( () => {
    loadTasks();
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
            <div>
            <S.Title>
            <h3>Atividades Semanais por Tipo</h3>
            <S.Span>Tipo de tarefa:</S.Span>
            <S.Select value={typeTasks} onChange={trocarTipo}>
              <option value={0}> </option>
              <option value={1}>Tarefa Padrão</option>
              <option value={2}>Esportes</option>
              <option value={3}>Alimentação</option>
              <option value={4}>Trabalho</option>
              <option value={5}>Social</option>
              <option value={6}>Estudos</option>
              <option value={7}>Compras</option>
              <option value={8}>Viagens</option>
              <option value={9}>Academia</option>
            </S.Select>
          </S.Title>
            </div>
        <Chart data={chart}/>
          </S.LeftSide>
          <S.RightSide>
          <div>
            <S.Title2>
            <h3>Atividades Realizadas</h3>
          <S.Span>     </S.Span>
              
            </S.Title2>
            </div>
            <ChartBar data={bar}/>
          </S.RightSide>
        </S.Content>
      </LoadingMask>
      <Footer />
    </S.Container>
  );
}

export default Dashboard;