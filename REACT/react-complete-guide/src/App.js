import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import person from './Person/Person';



class App extends Component {

  state = {
    persons: [
      {
        name:"Nidhi",
        age:27,
        id:1
      },
      {
        name:"Nidhi1",
        age:25,
        id:2
      }
    ],
    showPerson: false,
  }

deletPersonHandler = (personIndex) => {
  // const persons = this.state.persons; //this one using direct data
  const persons = [...this.state.persons]; // this one copy of data
  persons.splice(personIndex,1);
  this.setState({persons: persons});
}
  nameChaneHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = 
    {
     ... this.state.persons[personIndex] // copy data
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];//copy persons data
    persons[personIndex] = person;

    this.setState(
      {persons: persons}
    )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'Lightgreen',
        color:'black',
      }
    };
let persons = null;

if(this.state.showPerson){
  persons = (
    <div>
      {
        this.state.persons.map((person, index) => {
          return(
            <Person 
            name={person.name} 
            age={person.age} 
            click={() => this.deletPersonHandler(index)
            }
            key={person.id}
            changed={(event) => this.nameChaneHandler(event,person.id)}
            />
          );
        })
      }
  </div>

  );
  // style.backgroundColor = 'red';
  // style[':hover'] = {
  //   backgroundColor:'salmon',
  //   color:'black',
  // };
}

const classes = [];
if(this.state.persons.length <= 2){
  classes.push('red');  // class red

}
if(this.state.persons.length <= 1){
  classes.push('bold');  // class red and bold

}

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi</h1>
        <p className={classes.join(' ')}> i am p tag</p>
        <button
        alt = {this.state.showPerson}
        onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        
        {persons}
          
      </div>
      /* </StyleRoot> */
    );
  }
}

export default App;
