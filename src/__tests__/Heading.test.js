import React from 'react';
import ReactDOM from 'react-dom';
import Heading from '../components/Heading';

it('renders without crashing as a primary heading', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading primaryHeading='true'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing when it is not a primary heading', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading primaryHeading='false'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});