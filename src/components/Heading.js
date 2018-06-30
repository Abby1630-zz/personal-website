import React, { Component } from 'react';
import '../css/Heading.css'

class Heading extends Component {
  render() {
    let nameClasses = 'Item';
    let dateClases = 'Item';
    if (this.props.primaryHeading === 'true') {
      nameClasses = nameClasses + ' SectionSubheading';
      dateClases = dateClases + ' SectionDate';
    } else {
      nameClasses = nameClasses + ' SectionSubheading2';
      dateClases = dateClases + ' SectionDate2';
    }

    return (
      <div className="Container">
        <div className={nameClasses}>{this.props.name}</div>
        <div className={dateClases}>{this.props.date}</div>
      </div>
    );
  }
}

export default Heading;
