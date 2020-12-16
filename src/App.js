import './App.css';
import React from 'react';
import chuck from './chuck-norris.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './categories';

function App() {
  return (
    <div>
      <div id="image-zone">
      <img src={chuck} alt="Chuck Norris"/>
      </div>
      <div id="content-zone">
        <h1>An implementation of the Chuck Norris fun API!</h1>
        <h3>Check out my favourite aspects!</h3>
        <Categories />
      </div>
    </div>
  );
}

export default App;
