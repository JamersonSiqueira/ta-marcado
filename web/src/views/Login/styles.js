import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    button:focus {
        outline-style: none;
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #38A6FF;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 70px;
    padding-top: 60px;
    img {
        width: 300px;
        margin: 15px;
    }

    h1 {
        color: #FFFFFF;
    }

    p {
        color: #006BC2;
    }
    background-color: #38A6FF;
`

export const ValidationCode = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    align-itens: center;
    justify-content: center;
    background-color: #38A6FF;

    span {
        font-weight: bold;
        align-itens: center;
        justify-content: center;
        color: #FFF;
    }

    input {
        font-size: 18px;
        padding: 10px;
        text-align: center;
        margin: 10px;
    }

    button {
        font-weight: bold;
        background: #FFF;
        color: #38A6FF;
        font-size: 18px;
        padding: 10px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin-top: 10px;

        &:hover {
            background: #006BC2;
            color: #FFF;
        }
    }
`

