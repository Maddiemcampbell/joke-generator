import React from 'react';
import axios from 'axios';
import Font from './font';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='app'>
                <Font />
            </div>


        )
    }
}