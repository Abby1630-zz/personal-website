import React, { Component } from 'react';
import { Timeline, Divider, Row, Col } from 'antd';
import Heading from '../components/Heading';
import '../css/Resume.css'

class Resume extends Component {
  render() {
    
    return (
      <div>
        <div>

          <Divider orientation='left' className='pinkHorizontal'><h1>Work Experience</h1></Divider>
          <p className='SectionTimeline' >
            <Timeline>
              <Timeline.Item className='purpleTimeline'>
                <Heading primaryHeading='true' name='Principal Financial Group - Des Moines, Iowa' date='May 2011 – Present'> </Heading>

                <Heading primaryHeading='false' name='Software Developer' date='April 2016 – Present'> </Heading>
                <ul>
                  <li className='SectionInformation'>Working collaboratively in a SAFe SCRUM team</li>
                  <li className='SectionInformation'>Developing and improving applications with Drupal, CSS, JavaScript, jQuery, Java</li>
                  <li className='SectionInformation'>Implementing vendor products like Salesforce Marketing Cloud</li>
                  <li className='SectionInformation'>Supporting the corporate marketing department to enhance user experience for our customers and smarter marketing solutions</li>
                </ul>

                <Heading primaryHeading='false' name='Quality Control Analyst' date='September 2015 – April 2016'> </Heading>
                <ul>
                  <li className='SectionInformation'>Worked collaboratively in a SCRUM Agile team</li>
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
              <Timeline.Item className='purpleTimeline'>
                <Heading primaryHeading='true' name='Animal Rescue League of Iowa – Des Moines, IA' date='February 2011 – May 2011'> </Heading>

                <Heading primaryHeading='false' name='Database Coordinator Intern' date=''> </Heading>
                <ul>
                  <li className='SectionInformation'>Maintained the integrity of the customer database</li>
                  <li className='SectionInformation'>Updated records and merged duplicate records</li>
                </ul>
              </Timeline.Item>
              <Timeline.Item className='purpleTimeline'>
                <Heading primaryHeading='true' name='Drake University – Des Moines, IA' date='August 2010 – May 2011'> </Heading>

                <Heading primaryHeading='false' name='Student Records Analyst Assistant' date=''> </Heading>
                <ul>
                  <li className='SectionInformation'>Collected and compared data from multiple sources</li>
                  <li className='SectionInformation'>Analyzed university data and reported findings to Student Records Analyst</li>
                  <li className='SectionInformation'>Edited and rewrote policies and instructional documents</li>
                </ul>
              </Timeline.Item>
            </Timeline>
          </p>

          <Divider orientation='left' className='purpleHorizontal'><h1>Education</h1></Divider>
          <p className='SectionTimeline' >
            <Timeline>
              <Timeline.Item className='tealTimeline'>
                <Heading primaryHeading='true' name='Peruwayna Spanish School - Lima, Peru' date='January 2018 – February 2018'> </Heading>
                <div className='SectionInformation'>4 weeks of Spanish immersion classes. 80 hours of small group classes, 20 hours of private lessons.</div>
                <div className='SectionInformation'>Fluency Level Achieved: A2 - Pre-Intermediate 1</div>
              </Timeline.Item>
              <Timeline.Item className='tealTimeline'>
                <Heading primaryHeading='true' name='Iowa State University - Ames, Iowa' date='January 2013 – December 2017'> </Heading>
                <div className='SectionInformation'>M.S. Human Computer Interaction</div>
                <div className='SectionInformation'>GPA: 3.96</div>
              </Timeline.Item>
              <Timeline.Item className='tealTimeline'>
                <Heading primaryHeading='true' name='Drake University - Des Moines, Iowa' date='August 2008 – August 2011'> </Heading>
                <div className='SectionInformation'>B.S. Computer Science, Mathematics Minor</div>
                <div className='SectionInformation'>GPA: 3.21 – Major GPA: 3.30</div>
              </Timeline.Item>
            </Timeline>
          </p>

          <Divider orientation='left' className='tealHorizontal'><h1>Major Projects</h1></Divider>
          <p className='SectionTimeline' >
            <Timeline>
              <Timeline.Item className='blueTimeline'>
                <Heading primaryHeading='true' name='Salesforce Marketing Cloud' date=''> </Heading>
                <p className='SectionInformation'>
                  Aided in the architecture and implementation of Salesforce Marketing Cloud at Principal. This required learning about how different areas of the company were going to be using the tool, how the tool was structured, and transforming the data so it was in an intuitive state for non-technical marketers.
                </p>
              </Timeline.Item>

              <Timeline.Item className='blueTimeline'>
                <Heading primaryHeading='true' name='ExploreIT' date=''> </Heading>
                <p className='SectionInformation'>
                  {"Learned ReactJS by developing a responsive application for the Glazer Children's Museum. I designed and developed the solution using ReactJS, Heroku, Google Analytics, and Firebase. A professor at the University of Tampa provided the content and worked as a product owner of this project. This project was designed to be accessed on tablets and phones and can be "}
                  <a href="https://explore-it.herokuapp.com/">seen here.</a>
                </p>
              </Timeline.Item>

              <Timeline.Item className='blueTimeline'>
                <Heading primaryHeading='true' name='Principal Rebranding' date=''> </Heading>
                <p className='SectionInformation'>
                  Worked with the UX team on portraying our new company voice through the styling of our web properties via our style guide built on top of Bootstrap. This was a quick moving project with only 3.5 months for design and implementation.
                </p>
              </Timeline.Item>

              <Timeline.Item className='blueTimeline'>
                <Heading primaryHeading='true' name='Automation Prioritization' date=''> </Heading>
                <p className='SectionInformation'>
                  Worked with leaders in a department my team supported to prioritize and strategize the development of automated tests. Analyzed projects coming down the pipeline that we needed to resource and critical applications with automated testing gaps to develop a plan. I then assigned work to myself and teammates to execute on the plan I developed.
                </p>
              </Timeline.Item>

            </Timeline>
          </p>

          <Divider orientation='left' className='blueHorizontal'><h1>Activities</h1></Divider>
          <p className='SectionTimeline' >
            <Timeline>
              <Timeline.Item className='purpleTimeline'>
                <Heading primaryHeading='true' name='Reboot Iowa' date='January 2016 – Present'> </Heading>
                <div className='SectionInformation'>Board Member</div>
              </Timeline.Item>
              <Timeline.Item className='purpleTimeline'>
                <Heading primaryHeading='true' name='Principal Financial Group Internship Program' date='September 2015 – Present'> </Heading>
                <div className='SectionInformation'>Interviewer</div>
              </Timeline.Item>
              <Timeline.Item className='purpleTimeline'>
                <Heading primaryHeading='true' name='Taking the Road Less Traveled Conference' date='May 2011 – Present'> </Heading>
                <div className='SectionInformation'>Presenter</div>
              </Timeline.Item>
              <Timeline.Item className='purpleTimeline'>
                <Heading primaryHeading='true' name='Principal Financial Group QA Recruiting Committee' date='January 2013 – April 2016'> </Heading>
                <div className='SectionInformation'>Committee Member</div>
              </Timeline.Item>
            </Timeline>
          </p>

          <Divider orientation='left' className='pinkHorizontal'><h1>Honors & Awards</h1></Divider>
          <p className='SectionTimeline' >
            <Timeline>
              <Timeline.Item className='tealTimeline'>
                <Heading primaryHeading='true' name='Microsoft Imagine Cup – User Experience Challenge' date='March 2015'> </Heading>
                <div className='SectionInformation'>World Citizenship Honorable Mention</div>
              </Timeline.Item>
              <Timeline.Item className='tealTimeline'>
                <Heading primaryHeading='true' name='Drake University Presidential Scholarship' date='2008 - 2011'> </Heading>
              </Timeline.Item>
              <Timeline.Item className='tealTimeline'>
                <Heading primaryHeading='true' name='Drake University Dean’s List' date='Fall 2009, Fall 2010, Spring 2011'> </Heading>
              </Timeline.Item>
            </Timeline>
          </p>

          <Divider orientation='left' className='purpleHorizontal'><h1>Skills</h1></Divider>
          <div className='SectionTimeline'>
            <Row type="flex" justify="space-around">
              <Col span={12}>
                <h3 className='SkillHeading'>Coding Languages</h3>
                <ul className='Skills'>
                  <li>JavaScript</li>
                  <li>Salesforce Marketing Cloud</li>
                  <li>SQL</li>
                  <li>ReactJS</li>
                  <li>HTML/CSS/SASS</li>
                  <li>Drupal</li>
                  <li>VBScript</li>
                  <li>Groovy</li>
                  <li>Python</li>
                </ul>
              </Col>
              <Col span={12}>
                <h3 className='SkillHeading'>Testing Languages</h3>
                <ul className='Skills'>
                  <li>Sinon</li>
                  <li>Mocha</li>
                  <li>Jest</li>
                  <li>Enzyme</li>
                  <li>Selenium</li>
                  <li>Cucumber</li>
                  <li>Ranorex</li>
                  <li>SoapUI</li>
                  <li>Postman</li>
                  <li>QTP/UFT</li>
                </ul>
              </Col>

            </Row>
            <Row type="flex">
              <Col span={12}>
                <h3 className='SkillHeading'>Soft Skills</h3>
                <ul className='Skills'>
                  <li>Problem Solving</li>
                  <li>Adaptability</li>
                  <li>Strategic Planning</li>
                  <li>Data Driven Decision Making</li>
                  <li>Agile/SCRUM/SAFe/Kanban</li>
                  <li>Spanish - A2 Fluency</li>
                </ul>
              </Col>
              <Col span={12}>
                <h3 className='SkillHeading'>Tools</h3>
                <ul className='Skills'>
                  <li>JIRA</li>
                  <li>Confluence</li>
                  <li>Bamboo</li>
                  <li>Bitbucket/GitHub</li>
                  <li>Heroku</li>
                  <li>Axure</li>
                  <li>Balsamiq</li>
                  <li>Moqups</li>
                </ul>
              </Col>
            </Row>
          </div>

        </div>
      </div>
    );
  }
}

export default Resume;
