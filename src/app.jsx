import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jokeRandom:[],
            jokeProgramming: []
        }
        this.handleRandomJoke = this.handleRandomJoke.bind(this);
        this.handleProgrammingJoke = this.handleProgrammingJoke.bind(this);
    }

    handleProgrammingJoke() {
        axios
          .get('https://sv443.net/jokeapi/category/Programming')
          .then(response => response.data)
          .then( jokeProgramming => {
              console.log(jokeProgramming.joke)            
              this.setState({ 
                  jokeProgramming: jokeProgramming.joke,
              });
              console.log(this.state.jokeProgramming);
          })
        }

    handleRandomJoke() {
        axios
          .get('http://api.icndb.com/jokes/random/')
          .then(response => response.data)
          .then( jokeRandom => {
              console.log(jokeRandom.value.joke)            
              this.setState({ 
                  jokeRandom: jokeRandom.value.joke,
              });
              console.log(this.state.jokeRandom);
          })
        }
        
        
    render() {
        return (
            <div className="App">
            <div className="container">
              <div>
                <button className="btn" onClick={this.handleRandomJoke}>
                  CLICK ME!
                </button>
                <h2 className=''>{this.state.jokeRandom}</h2>
              </div>
              <div className="container">
              <div>
                <button className="btn" onClick={this.handleProgrammingJoke}>
                  CLICK ME!
                </button>
                <h2 className=''>{this.state.jokeProgramming}</h2>
              </div>
            </div>
          </div>
          </div>
        )
    }
}