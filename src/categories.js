import './App.css';
import { Button } from 'react-bootstrap';
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import axios from 'axios';

     
    class Categories extends React.Component {
      constructor(props) {
        super(props);
        this.state = {fact: 'Chuck Norris can text using his walkie talkie and without batteries.' };   //hmm?

        this.getFact = this.getFact.bind(this);
      }
     
      getFact() {
        let category = document.getElementsByTagName("Button").innerHTML;
        axios.get('https://api.chucknorris.io/jokes/random?category=' + category)
          .then(response => {
          //rendering the jokes value as the event occurs
          const jokesZone = document.getElementById("jokes-zone");
          jokesZone.innerHTML = this.setState({fact: response.data.value});
          console.log(response);
        }).catch(error => {
          console.log(error);
        });
      }
       
    render(){
        return (
        <div className="mb-2">
            <Button variant="dark" size="lg" onClick={this.getFact}>
             animal
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             career
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             movie
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             food
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             dev
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             science
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             money
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             music
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             sport
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             travel
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             history
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             music
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             celebrity
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             explicit
            </Button>{' '}
            <Button variant="dark" size="lg" onClick={this.getFact}>
             fashion
            </Button>{' '}
            <div id="jokes-zone"></div>
        </div>
    )};
}

export default Categories;