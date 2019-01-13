import React, { Component } from 'react';
import { Timeline, Divider, Row, Col } from 'antd';
import Heading from '../components/Heading';
import '../css/Resume.css'

class AboutMe extends Component {
  render() {
    const timelineStyle = {
      paddingTop: '0'
    }
    return (
      <div>
        <div>
          <Divider orientation='left' className='pinkHorizontal'><h1>About Me</h1></Divider>

          <p>Hello!</p>

          <p>
            I am currently rewriting my webpage so I apologize for the disjointedness. <strong>If you are looking for my resume, please <a href="https://abbyhuisman.herokuapp.com/" rel="noopener" target="_blank">go here</a>.</strong>
          </p>

          <p>
            I am a Software Developer at Principal Financial Group where I typically focus on front end development. I  just completed a master’s degree in Human Computer Interaction because I’ve always been fascinated in the areas were physiology, psychology, sociology, and computer science come together.
          </p>

          <p>
            With some of my time outside of work and school, I enjoy teaching coding fundamentals at Iowa State University’s Taking the Road Less Traveled Conference as well as sitting on the board of directors for <a href="https://rebootiowa.org/" target="_blank">Reboot Iowa</a>.
          </p>

          <p>
            In my spare time, I love cooking, baking, traveling, and spending time with my dog, Lola.
          </p>

        </div>
      </div>
    );
  }
}

export default AboutMe;
