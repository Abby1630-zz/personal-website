import React, { Component } from 'react';
import '../css/Name.css'

class Name extends Component {
  render() {
    const headerStyle = {
      display:'block',
      height: '120px'
    }

    const headerDiv = {
      display: 'flex' ,
      justifyContent: 'center'
    }

    return (
      <div style={headerDiv}>
        <img alt='name' style={headerStyle} src={process.env.PUBLIC_URL + '/logoWithTitle.svg'}/>
      </div>
    );
  }
}

export default Name;
