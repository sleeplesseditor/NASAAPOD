import React, { Component } from 'react';
import axios from 'axios';
import AstronomyCard from './AstronomyCard';

class AstronomyContainer extends Component {
    constructor(){
        super();

        this.state = {
            astronomy: []
        }
    }

    componentDidMount(){
        const API_KEY = require('../config/keys').nasaAPI;

        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            .then(response => {
                this.setState({
                    astronomy: response.data
                })

                console.log(this.state.astronomy);
            })
            .catch(error => {
                console.log(error, 'Failed to fetch NASA Data')
            });
    }

    render() {
        const { astronomy } = this.state;

        return (
            <div>
                <AstronomyCard data={astronomy} />
            </div>
        )
    }
}

export default AstronomyContainer;