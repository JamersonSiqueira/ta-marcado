import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    button:focus {
        outline-style: none;
    }
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Content = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 70px;

    h1 {
        color: #EE6B26;
    }

    p {
        color: #20295F;
    }
`

export const QRCodeArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ValidationCode = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    span {
        font-weight: bold;
    }

    input {
        font-size: 18px;
        padding: 10px;
        text-align: center;
    }

    button {
        font-weight: bold;
        background: #EE6B26;
        color: #FFF;
        font-size: 18px;
        padding: 10px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin-top: 10px;

        &:hover {
            background: #20295F;
        }
    }
`

