import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import Nav from '../components/Nav';
import { shallow } from 'enzyme';

it('renders without crashing ', () => {
  const myFunc = jest.fn();
  const div = document.createElement('div');
  ReactDOM.render(<Nav changeView={myFunc} view='AboutMe' />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('changeView sets state.view to whatever is passed to it', () => {
  const myFunc = jest.fn();
  const wrapper = shallow(<Nav changeView={myFunc} view='AboutMe'/>);
  const expectedLink ={ key: Faker.random.alphaNumeric(20) };

  wrapper.instance().handleClick(expectedLink);
  expect(myFunc).toBeCalledWith(expectedLink.key);
});

