import React, { Component } from 'react';
import '../css/Name.css'
import { Menu, Icon } from 'antd';

class Nav extends Component {

  handleClick = (e) => {
    this.props.changeView(e.key);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.props.view]}
        mode="horizontal"
      >
        <Menu.Item key="AboutMe">
          <Icon type="idcard" />About Me
        </Menu.Item>
        <Menu.Item key="Resume">
          <Icon type="profile" />Resume
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;
