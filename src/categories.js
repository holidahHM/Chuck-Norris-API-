import './App.css';
import { Button } from 'react-bootstrap';
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import axios from 'axios';

     
    class Categories extends React.Component {
      constructor(props) {
        super(props);  //to ensure validity of any implementation of the this.props
        this.state = {fact: 'Joke zone', value: 'money'};
        this.categoryValue = this.categoryValue.bind(this);
        this.getFact = this.getFact.bind(this); //binding the getFact method for the Categories component
      };
    
      categoryValue(e){
        //const buttonElement = document.querySelectorAll("Button");
        //this.setState({value: {buttonElement[0].getAttribute("value")}})
        //event target -> (e)=> {return e.target.attributes.data.value;}
          //JSON.stringify(document.getElementsByTagName("Button").getAttribute("value"))});
          //this.categoryValue(e, "value");
        //console.log(e.target.value);
        this.setState({value: e.target.value})
      }

      getFact() {
          //getting the node value for the Button component
        const jokesZone = document.getElementById("jokes-zone");
        const url_to_fetch = 'https://api.chucknorris.io/jokes/random?category=' + this.categoryValue(this.state.value);
        console.log(this.categoryValue());
        console.log(url_to_fetch);

        axios.get(url_to_fetch)
          .then(response => {
          //rendering the jokes value as the event occurs
          jokesZone.innerHTML = response.data.value; //DOM writes the fetched information
          console.log(response.data.value); //why not ->  this.setState({fact: response.data.value});  ?
        }).catch(error => {
          console.log(error);
        });
      }
      
    render(){
        return (
        <div className="mb-2">
            <Button variant="dark" size="lg" value="animal" onClick={this.getFact}>
             animal
            </Button>{' '}
            <Button variant="dark" size="lg" value="career" onClick={() => this.getFact()}>
             career
            </Button>{' '}
            <Button variant="dark" size="lg" value="movie" onClick={() => this.getFact()}>
             movie
            </Button>{' '}
            <Button variant="dark" size="lg" value="food" onClick={() => this.getFact()}>
             food
            </Button>{' '}
            <Button variant="dark" size="lg" value="dev" onClick={() => this.getFact()}>
             dev
            </Button>{' '}
            <Button variant="dark" size="lg" value="science" onClick={() => this.getFact()}>
             science
            </Button>{' '}
            <Button variant="dark" size="lg" value="money" onClick={() => this.getFact()}>
             money
            </Button>{' '}
            <Button variant="dark" size="lg" value="music" onClick={() => this.getFact()}>
             music
            </Button>{' '}
            <Button variant="dark" size="lg" value="sport" onClick={() => this.getFact()}>
             sport
            </Button>{' '}
            <Button variant="dark" size="lg" value="travel" onClick={() => this.getFact()}>
             travel
            </Button>{' '}
            <Button variant="dark" size="lg" value="history" onClick={() => this.getFact()}>
             history
            </Button>{' '}
            <Button variant="dark" size="lg" value="music" onClick={() => this.getFact()}>
             music
            </Button>{' '}
            <Button variant="dark" size="lg" value="celebrity" onClick={() => this.getFact()}>
             celebrity
            </Button>{' '}
            <Button variant="dark" size="lg" value="explicit" onClick={() => this.getFact()}>
             explicit
            </Button>{' '}
            <Button variant="dark" size="lg" value="fashion" onClick={() => this.getFact()}>
             fashion
            </Button>{' '}
        <div id="jokes-zone"></div>
        </div>
    )};
}

export default Categories;