import React, { Component } from 'react';
import { Timeline, Divider } from 'antd';
import Heading from '../components/Heading';
import '../css/Resume.css'

class Resume extends Component {
  render() {
    const timelineStyle = {
      paddingTop: '0'
    }
    return (
      <div>
        <div>
          <Divider orientation='left'><h1>Education</h1></Divider>
          <p className='SectionTimeline' >
            <Timeline>
              <Timeline.Item color='green'>
                <Heading primaryHeading='true' name='Iowa State University - Ames, Iowa' date='January 2013 – December 2017'> </Heading>
                <div className='SectionInformation'>M.S. Human Computer Interaction</div>
                <div className='SectionInformation'>GPA: 3.96</div>
              </Timeline.Item>
              <Timeline.Item color='green'>
                <Heading primaryHeading='true' name='Drake University - Des Moines, Iowa' date='August 2008 – August 2011'> </Heading>
                <div className='SectionInformation'>BS Computer Science, Mathematics Minor</div>
                <div className='SectionInformation'>GPA: 3.21 – Major GPA: 3.30</div>
              </Timeline.Item>
            </Timeline>
          </p>

          <Divider orientation='left'><h1>Work Experience</h1></Divider>
          <p className='SectionTimeline' >
            <Timeline>
              <Timeline.Item color='green'>
                <Heading primaryHeading='true' name='Principal Financial Group - Des Moines, Iowa' date='May 2011 – Present'> </Heading>

                <Heading primaryHeading='false' name='Software Developer' date='April 2016 – Present'> </Heading>
                <ul>
                  <li className='SectionInformation'>Working collaboratively in an SAFe SCRUM team</li>
                  <li className='SectionInformation'>Developing and improving applications with Drupal, CSS, Javascript, jQuery, Java</li>
                  <li className='SectionInformation'>Implementing vendor products like Salesforce Marketing Cloud</li>
                  <li className='SectionInformation'>Supporting the corporate marketing department to enhance user experience for our customers and smarter marketing solutions</li>
                </ul>

                <Heading primaryHeading='false' name='Quality Control Analyst' date='September 2015 – April 2016'> </Heading>
                <ul>
                  <li className='SectionInformation'>Worked collaboratively in an SCRUM Agile team</li>
                  <li className='SectionInformation'>Lead the QA effort for the digital style guide during Principal’s rebranding</li>
                  <li className='SectionInformation'>Wrote and executed test plans</li>
                  <li className='SectionInformation'>Used automation testing tools to test more efficiently</li>
                </ul>

                <Heading primaryHeading='false' name='Automation Engineer' date='August 2011 – September 2015'> </Heading>
                <ul>
                  <li className='SectionInformation'>Lead, managed and resourced a portfolio</li>
                  <li className='SectionInformation'>Worked collaboratively with colleagues</li>
                  <li className='SectionInformation'>Used automation testing tools to support cross-departments automation needs</li>
                  <li className='SectionInformation'>Trained new employees</li>
                  <li className='SectionInformation'>Created and enforced an automation testing strategy</li>
                </ul>

                <Heading primaryHeading='false' name='Quality Assurance Intern' date='May 2011 – August 2011'> </Heading>
                <ul>
                  <li className='SectionInformation'>Used Quick Test Professional to perform automation testing on different company applications</li>
                  <li className='SectionInformation'>Developed a cross-site scripting tool to test company applications</li>
                </ul>
              </Timeline.Item>
              <Timeline.Item color='green'>
                <Heading primaryHeading='true' name='Animal Rescue League of Iowa – Des Moines, IA' date='February 2011 – May 2011'> </Heading>

                <Heading primaryHeading='false' name='Database Coordinator Intern' date=''> </Heading>
                <ul>
                  <li className='SectionInformation'>Maintained the integrity of the customer database</li>
                  <li className='SectionInformation'>Updated records and merged duplicate records</li>
                </ul>
              </Timeline.Item>
              <Timeline.Item color='green'>
                <Heading primaryHeading='true' name='Drake University – Des Moines, IA' date='August 2010 – May 2011'> </Heading>

                <Heading primaryHeading='false' name='Student Records Analyst Assistant' date=''> </Heading>
                <ul>
                  <li className='SectionInformation'>Collected and compared data from multiple sources</li>
                  <li className='SectionInformation'>Analyzed university data and reported findings to Student Records Analyst</li>
                  <li className='SectionInformation'>AEdited and rewrote policies and instructional documents</li>
                </ul>
              </Timeline.Item>
            </Timeline>
          </p>

          <Divider orientation='left'><h1>Major Projects</h1></Divider>
          <p className='SectionTimeline' >
            <Timeline>
              <Timeline.Item color='green'>
                <Heading primaryHeading='true' name='SalesForce Marketing Cloud' date=''> </Heading>
                <p className='SectionInformation'>
                  Aided in the architecture and implementation of SalesForce Marketing Cloud at Principal. This required learning about how different areas of the company were going to be using the tool, how the tool was structured, and transforming the data so it was in an intuitive state for non-technical marketers.
                </p>
              </Timeline.Item>

              <Timeline.Item color='green'>
                <Heading primaryHeading='true' name='ExploreIT' date=''> </Heading>
                <p className='SectionInformation'>
                  {"Learned ReactJS by developing a responsive application for the Glazer Children's Museum. I designed and developed the solution using ReactJS, Heroku, Google Analytics, and Firebase. A professor at the University of Tampa provided the content and worked as a product owner of this project. This project was designed to be accessed on tablets and phones and can be "}
                  <a href="https://explore-it.herokuapp.com/">seen here.</a>
                </p>
              </Timeline.Item>

              <Timeline.Item color='green'>
                <Heading primaryHeading='true' name='Principal Rebranding' date=''> </Heading>
                <p className='SectionInformation'>
                  Worked with the UX team on protraying our new company voice through the styling of our web properties via our style guide built on top of Bootstrap. This was a quick moving project wiht only 3.5 months for design and implementation.
                </p>
              </Timeline.Item>

              <Timeline.Item color='green'>
                <Heading primaryHeading='true' name='Automation Prioritization' date=''> </Heading>
                <p className='SectionInformation'>
                  Worked with leaders in a department my team supported to prioritize and strategize the development of automated tests. Analyzed projects coming down the pipeline that we needed to resource and critical applications with automated testing gaps to develop a plan. I then assigned work to myself and teammates to execute on the plan I developed.
                </p>
              </Timeline.Item>

            </Timeline>
          </p>

        </div>
      </div>
    );
  }
}

export default Resume;
