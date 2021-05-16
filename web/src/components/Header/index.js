import {React, useEffect, useState }from 'react';
import * as S from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import { Link } from 'react-router-dom';
import isConnected from '../../utils/isConnected';

function Header({onClickNotify}) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify(){
    await api.get(`/task/filter/late/${isConnected}`)
    .then(response => {
      setLateCount(response.data.length);
    })
  }

  useEffect(() => {
    lateVerify()
  })

  async function logout(){
    localStorage.removeItem('@tamarcado/userid');
    window.location.reload();
  }

  return (
    <S.Container>
      <S.LeftSide>
        <Link to="/">
        <img src={logo} alt="Logotipo"/>
        </Link>
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">INÍCIO</Link>
        <span className="dividir"/>
        <Link to="/task">NOVA TAREFA</Link>
        <span className="dividir"/>
        <Link to="/profile">PERFIL</Link>
        <span className="dividir"/>
        <button type='button' onClick={logout}>SAIR</button>
        {
          lateCount!=0 &&
          <>
        <span className="dividir"/>
        <button onClick={onClickNotify} id="notification">
          <img src={bell} alt="Notificação" />
          <span>{lateCount}</span>
          </button>
          </>
          }
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
