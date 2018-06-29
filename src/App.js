import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Name from './components/Name';
import Resume from './views/Resume';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Name></Name>
        </header>
        <Resume></Resume>
      </div>
    );
  }
}

export default App;
