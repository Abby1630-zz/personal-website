import React, { Component } from 'react';
import { Timeline, Divider } from 'antd';
import '../css/Resume.css'

class Resume extends Component {
  render() {
    const timelineStyle = {
      paddingTop: '0'
    }
    return (
      <div>
        <div>
          <Divider orientation="left"><h1>Education</h1></Divider>
          <p className="SectionTimeline" >
            <Timeline>
              <Timeline.Item color="green">
                <div className="Container">
                  <div className="Item SectionSubheading">Iowa State University - Ames, Iowa</div>
                  <div className="Item SectionDate">January 2013 – December 2017</div>
                </div>
                <div className="SectionInformation">M.S. Human Computer Interaction</div>
                <div className="SectionInformation">GPA: 3.96</div>
              </Timeline.Item>
              <Timeline.Item color="green">
                <div className="Container">
                  <div className="Item SectionSubheading">Drake University - Des Moines, Iowa</div>
                  <div className="Item SectionDate">August 2008 – August 2011</div>
                </div>
                <div className="SectionInformation">BS Computer Science, Mathematics Minor</div>
                <div className="SectionInformation">GPA: 3.21 – Major GPA: 3.30</div>
              </Timeline.Item>
            </Timeline>
          </p>

          <Divider orientation="left"><h1>Work Experience</h1></Divider>
          <p className="SectionTimeline" >
            <Timeline>
              <Timeline.Item color="green">
                <div className="Container">
                  <div className="Item SectionSubheading">Principal Financial Group - Des Moines, Iowa</div>
                  <div className="Item SectionDate">May 2011 – Present</div>
                </div>
                <div className="SectionInformation">M.S. Human Computer Interaction</div>
                <div className="SectionInformation">GPA: 3.96</div>
              </Timeline.Item>
              <Timeline.Item color="green">
                <div className="Container">
                  <div className="Item SectionSubheading">Drake University - Des Moines, Iowa</div>
                  <div className="Item SectionDate">August 2008 – August 2011</div>
                </div>
                <div className="SectionInformation">BS Computer Science, Mathematics Minor</div>
                <div className="SectionInformation">GPA: 3.21 – Major GPA: 3.30</div>
              </Timeline.Item>
              <Timeline.Item color="green">
              </Timeline.Item>
            </Timeline>
          </p>
        </div>
      </div>
    );
  }
}

export default Resume;
