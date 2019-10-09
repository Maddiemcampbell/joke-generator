import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jokeRandom: [],
            jokeProgramming: []
        }
        this.handleRandomJoke = this.handleRandomJoke.bind(this);
        this.handleProgrammingJoke = this.handleProgrammingJoke.bind(this);
    }

    handleProgrammingJoke() {
        axios
            .get('https://sv443.net/jokeapi/category/Programming')
            .then(response => response.data)
            .then(jokeProgramming => {
                this.setState({
                    jokeProgramming: jokeProgramming.joke,
                });
            })
    }

    handleRandomJoke() {
        axios
            .get('http://api.icndb.com/jokes/random/')
            .then(response => response.data)
            .then(jokeRandom => {
                this.setState({
                    jokeRandom: jokeRandom.value.joke,
                });
            })
    }


    render() {
        return (
            <div className="app">
                    <h1>A Joke For Everyone!</h1>
                    <div className="container">
                        <button className="butn" onClick={this.handleRandomJoke}>
                            Random Joke!
                        </button>
                        <h2 className='joke'>{this.state.jokeRandom}</h2>
                    </div>

                    <div className="container">
                        <div className="jokeWrapper">
                            <button className="butn" onClick={this.handleProgrammingJoke}>
                                Programmer Joke!
                            </button>
                            <h2 className='joke'>{this.state.jokeProgramming}</h2>
                        </div>
                    </div>
            </div>
        )
    }
}