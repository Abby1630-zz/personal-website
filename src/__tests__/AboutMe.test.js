import React from 'react';
import ReactDOM from 'react-dom';
import AboutMe from '../views/AboutMe';

it('renders without crashing ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutMe />, div);
  ReactDOM.unmountComponentAtNode(div);
});
