import styled from 'styled-components';

export const Container = styled.div`
    width: 210px;
    height: 60px;
    padding: 10px;
    background: ${props => props.actived ? '#006BC2' : '#38A6FF'};
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
        color: ${props => props.actived ? '#FFFFFF' : '#FFFFFF'};
        font-weight: bold;
        align-self: flex-end;
    }
    &:hover {
        background: #006BC2;
    }
`