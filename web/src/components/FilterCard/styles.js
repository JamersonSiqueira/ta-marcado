import styled from 'styled-components';

export const Container = styled.div`
    width: 210px;
    height: 60px;
    padding: 10px;
    background: ${props => props.actived ? '#EE6B26' : '#20295F'};
    border-radius: 5px;
    cursor: pointer;
    
    display: flex;
    flex-directions: column;
    justify-content: space-between;

    img {
        width: 25px;
        height: 25px;
    }

    span {
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
    }
    &:hover {
        background: #EE6B26;
    }
`