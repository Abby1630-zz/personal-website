import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import App from '../App';
import AboutMe from '../views/AboutMe';
import Resume from '../views/Resume';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displayPage returns About Me when the state.view is AboutMe', () => {
  const wrapper = shallow(<AboutMe/>);
  const app = new App();
  const aboutMe = new AboutMe();
  ('expect about me');

  app.state = { view: 'AboutMe' };
  expect(app.displayPage()).toMatchObject(wrapper);
});

it('displayPage returns Resume when the state.view is Resume', () => {
  const wrapper = shallow(<Resume/>);
  const app = new App();
  const resume = new Resume();
  ('expect resume');

  app.state = { view: 'Resume' };
  expect(app.displayPage()).toMatchObject(wrapper);
});

it('displayPage returns Resume when the state.view is not set', () => {
  const wrapper = shallow(<Resume/>);
  const app = new App();
  const resume = new Resume();
  
  app.state = { };
  expect(app.displayPage()).toMatchObject(wrapper);
});

it('changeView sets state.view to whatever is passed to it', () => {
  const wrapper = shallow(<App/>);

  const expectedView = Faker.random.alphaNumeric(20);
  wrapper.state = { };
  wrapper.instance().changeView(expectedView);
  expect(wrapper.instance().state.view).toBe(expectedView);
});