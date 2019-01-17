import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import AboutMe from '../views/AboutMe';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const wrapper = shallow(<App />);

  wrapper.setState({ view: 'AboutUs' });
  expect(App.displayPage()).toMatchObject(AboutMe);


});
