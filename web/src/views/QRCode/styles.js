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
    padding-top: 60px;
    img {
        width: 30%;
    }

    h1 {
        color: #38A6FF;
    }

    p {
        color: #006BC2;
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
    align-itens: center;
    justify-content: center;

    span {
        font-weight: bold;
        align-itens: center;
        justify-content: center;
    }

    input {
        font-size: 18px;
        padding: 10px;
        text-align: center;
        margin: 10px;
    }

    button {
        font-weight: bold;
        background: #38A6FF;
        color: #FFF;
        font-size: 18px;
        padding: 10px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin-top: 10px;

        &:hover {
            background: #006BC2;
        }
    }
`

