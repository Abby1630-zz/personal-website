import React from 'react';
import ReactDOM from 'react-dom';
import Name from '../components/Name';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Name />, div);
  ReactDOM.unmountComponentAtNode(div);
});

