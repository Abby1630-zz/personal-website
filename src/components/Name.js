import React, { Component } from 'react';
import '../css/Name.css'

class Name extends Component {
  render() {
    const headerStyle = {
      color: 'white'
    }
    return (
      <div>
          <h1 style={headerStyle}>Abby Huisman</h1>
        <p>
          Software Developer | Human Computer Interaction M.S.
        </p>
      </div>
    );
  }
}

export default Name;
