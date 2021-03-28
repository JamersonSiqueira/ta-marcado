import styled from 'styled-components';



export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button:focus {
        outline-style: none;
    }
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`

export const TypeIcons = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   margin-top: 15px;

   button {
    background: none;
    border: none;
    }

    button:focus {
        outline-style: none;
    }
   .inative {
       opacity: 0.5;
   }
   img {
       width: 50px;
       height: 50px;
       margin: 8px;
       cursor: pointer;
       &:hover {
           opacity: 0.7;
       }
    
       
   }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 7px 0;

    span {
        color: #707070;
        margin: 5px 0;
    }

    input {
        font-size: 16px;
        padding: 13px;
        border: none;
        border-bottom: 1px solid #EE6B26;
    }

    img {
        width: 20px;
        height: 20px;
        position: relative;
        left: 95%;
        bottom: 30px;

    }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 7px 0;

    span {
        color: #707070;
        margin: 5px 0;
    }

    textarea {
        font-size: 16px;
        padding: 13px;
        border: 1px solid #EE6B26;
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        background: none;
        border: none;
        font-weight: bold;
        color: #20295F;
        font-size: 18px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
        
    }

    div {
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight: bold;
        font-size: 18px;

        input {
            width: 15px;
            height: 15px;
            border: 1px solid #EE6B26;
            background: #EE6B26;
        }
    }
`

export const Save = styled.div `
    width: 100%;
    margin-top: 20px;

    button {
        width: 100%;
        background-color: #EE6B26;
        border: none;
        font-size: 20px;
        color: #FFF;
        font-weight: bold;
        padding: 15px;
        border-radius: 30px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
`