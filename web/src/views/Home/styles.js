import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    button:focus {
        outline-style: none;
    }
`
export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;

    button:focus {
        outline-style: none;
    }

    button {
        background: none;
        border: none;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 70px;

    a{
        text-decoration: none;
        color: #000;
    }


`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #20295F;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    h3 {
        color: #20295F;
        position: relative;
        top: 30px;
        background: #FFF;
        padding: 0 12px;
    }
`

