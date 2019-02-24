import React, { Component } from 'react';
import { Divider } from 'antd';
import '../css/Resume.css'

class AboutMe extends Component {
  render() {

    return (
      <div>
        <div>
          <Divider orientation='left' className='pinkHorizontal'><h1>About Me</h1></Divider>

          <p>Hello!</p>

          <p>
            I'm currently rewriting my webpage so I apologize for the limited information.
          </p>

          <p>
            I'm a Senior Developer on RobustWealth's Des Moines team. I recently completed a master’s degree in Human Computer Interaction because I’ve always been fascinated in the areas were physiology, psychology, sociology, and computer science come together.
          </p>

          <p>
            With some of my time outside of work, I enjoy sharing my passion for STEM, specifically technology, as well as sitting on the board of directors for <a href='https://rebootiowa.org/' target='_blank' rel='noreferrer noopener'>Reboot Iowa</a>.
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
