import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    button:focus {
        outline-style: none;
    }
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 70px;

    a{
        text-decoration: none;
        color: #000;
    }
`

export const ContentTasks = styled.div`
    width: 100%;
    display: flex;
`
export const Image = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    img {
        border-radius: 50px;
        width: 130px;
    }
`
export const Span = styled.span`
    margin-bottom: 7px;
        padding: 0 10px;
`
export const Title = styled.h3`
        color: #38A6FF;
        position: relative;
        background: #FFF;
        padding: 0 10px;
`
export const Subtitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h4 {
        color: #38A6FF;
        position: relative;
        background: #FFF;
        margin: 5px;
    }
`

export const LeftSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 10px;
    margin-top: 15px;
`
//Estilo do botão Select
export const Select = styled.select `
    background-color: #38A6FF;
    color: white;
    padding: 12px;
    width: 200px;
    border: none;
    font-size: 20px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    -webkit-appearance: button;
    appearance: button;
    outline: none;
 
`
export const RightSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column; 
    margin-top: 15px;
`

export const LeftSideTasks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
`
export const TasksDivTitle = styled.div`
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 10px;
`
export const TasksDiv = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    background-color: #FFF;
    border-radius: 7px;
    border: 1px solid #707070;
    margin: 5px;
    padding: 5px 10px;
    box-shadow: -3px 3px 8px -5px rgba(0,0,0,0.50);
`

export const RightSideTasks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 10px;

    span {
        margin-bot: 5px;
    }
`

export const RightSideGraph = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 10px;

    span {
        margin-bot: 5px;
    }
`
export const ConquestDiv = styled.div`
    width: 85%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(112,112,112);
    margin: 5px;
    margin-bottom: 20px;
    padding: 10px 10px;

    img {
        height: 60px;
        padding-left: 10px;
    }
`

export const ConquestDivOff = styled.div`
    width: 85%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(112,112,112,0.5);
    border: 1px solid rgba(112,112,112);
    margin: 5px;
    margin-bottom: 20px;
    padding: 10px 10px;
    cursor: not-allowed;

    img {
        width: 60px;
        height: 60px;
        padding-left: 10px;
    }
`

export const SpanConqOff = styled.span`
    color: #707070;
    font-weight: bold;
    padding-left: 15px;
    
`

export const SpanConq = styled.span`
    color: #38A6FF;
    font-weight: bold;
    padding-left: 15px;
`

export const DivRightConq = styled.div` 
    align-items: flex-end;
    justify-content: flex-end;
`
export const SpanConqRight = styled.span`
    color: #38A6FF;
    font-size: 12px;
    float: right;
`

export const SpanConqRightOff = styled.span`
    color: #707070;
    font-size: 12px;
    float: right;
`

export const canvas = styled.canvas`
    border: 1px solid gainsboro;
    background: white;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
    width: 100%;
    height: 0px;
    `