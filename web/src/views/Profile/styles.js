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
        width:130px;
    }
`
export const Span = styled.span`
    margin-top: 5px;
`
export const Title = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 10px;

    h3 {
        color: #38A6FF;
        position: relative;
        background: #FFF;
        padding: 0 10px;
    }
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
        padding: 0 10px;
    }
`

export const LeftSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RightSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column; 
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
    margin-bottom: 15px;
`
export const TasksDiv = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    background-color: #FFF;
    border-radius: 15px;
    border: 1px solid #707070;
    margin: 5px;
    padding: 5px 10px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
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
