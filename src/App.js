import React, { Component } from 'react';
import './css/App.css';
import Name from './components/Name';
import Resume from './views/Resume';
import AboutMe from './views/AboutMe';
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'AboutMe'
    };

    this.displayPage = this.displayPage.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  changeView(newView) {
    this.setState({view:newView});
  }

  displayPage() {
    switch (this.state.view) {
      case 'AboutMe':
        return <AboutMe/>;
      case 'Resume':
        return <Resume></Resume>;
      default:
        return <Resume></Resume>;
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Name></Name>
        </header>
        <Nav view={this.state.view} changeView={this.changeView}></Nav>
        <div className="App-Body">
          {this.displayPage()}
        </div>
      </div>
    );
  }
}

export default App;
