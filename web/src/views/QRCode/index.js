import React, { useState}  from 'react';
import Qr from 'qrcode.react';
import {Redirect} from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as S from './styles';

function QRCode() {

    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    async function saveMac(){
        if(!mac)
        alert('Você precisa informar o código de confirmação! ');
        else {
            await localStorage.setItem('@todo/macaddress',mac);
            setRedirect(true);
            window.location.reload();
        }
    }

    return (
        <S.Container>
            {redirect && <Redirect to="/"/>}
            <Header />
            <S.Content>
                <h1>Capture o QRCode pelo APP no seu celular!</h1>
                <p>Suas atividades serão sincronizadas com o seu celular</p>
                <S.QRCodeArea>
                    <Qr value='getmacaddress' size={350}/>
                </S.QRCodeArea>
                
                <S.ValidationCode>
                    <span>Digite o código de confirmação que apareceu no celular</span>
                    <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
                    <button type="button" onClick={saveMac}>SINCRONIZAR</button>
                </S.ValidationCode>

            </S.Content>
            <Footer />
        </S.Container>
    )
}

export default QRCode;