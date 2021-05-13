import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #38A6FF;
    display: flex;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width: 120px;
        height: 55px;
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;  
    

    a {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #006BC2;
        }
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
    
    #notification {
        img {
            width: 25px;
            height: 28px;
        }

        span {
            background: #FFF;
            color: #006BC2;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px;
        }

        &:hover {
            opacity: 0.5;
        }
    }

    .dividir::after {
        content: "|";
        margin: 0 10px;
        color: #FFF;
    }

    button {
        font-size: 16px;
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #006BC2;
        }

    }
`