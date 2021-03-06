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
    padding-bottom: 100px;
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
    a:link{
        color: #FFFFFF;  
        text-decoration: none;
    }
    a:visited{
        color: #FFFFFF;  
        text-decoration: none;
    }
    a:hover{
        color: #006BC2;  
        text-decoration: none;
    }
    
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
        border-radius: 15px;
        border: 1px solid rgba(0,0,0,0.50);
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

