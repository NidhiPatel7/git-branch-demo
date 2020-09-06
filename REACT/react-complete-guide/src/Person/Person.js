import React from 'react';
import styled from 'styled-components';
//import './Person.css';
const StyleDiv = styled.div`
.Person{
    width: 60%;
    margin:16px  auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
}
`

const person = (props) => {
    // const style = {
    //     '@media (min-width:500px)' : {
    //         width:'450px'
    //     }
   // };
    return(
        // <div className="Person" style={style}>
       
            <StyleDiv>
            <p onClick={props.click}> i am {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            </StyleDiv>
        // </div>
    
    )
};

export default person;