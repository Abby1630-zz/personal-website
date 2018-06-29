import React, { Component } from 'react';
import { Timeline } from 'antd';
import '../css/Resume.css'

class Resume extends Component {
  render() {
    const timelineStyle = {
      paddingTop: '0'
    }
    return (
      <div>
        <h1 className="SectionHeader">Education</h1>
        <p className="SectionTimeline" >
          <Timeline>
            <Timeline.Item color="green">
              <div className="Container">
                <div className="Item SectionSubheading">Iowa State University - Ames, Iowa</div>
                <div className="Item">January 2013 – December 2017</div>
              </div>
              <div className="SectionInformation">M.S. Human Computer Interaction</div>
              <div className="SectionInformation">GPA: 3.96</div>
            </Timeline.Item>
            <Timeline.Item color="green">
              <div className="Container">
                <div className="Item SectionSubheading">Drake University - Des Moines, Iowa</div>
                <div className="Item">August 2008 – August 2011</div>
              </div>
              <div className="SectionInformation">BS Computer Science, Mathematics Minor</div>
              <div className="SectionInformation">GPA: 3.21 – Major GPA: 3.30</div>
            </Timeline.Item>
            <Timeline.Item color="green">
            </Timeline.Item>
          </Timeline>
        </p>
      </div>
    );
  }
}

export default Resume;
