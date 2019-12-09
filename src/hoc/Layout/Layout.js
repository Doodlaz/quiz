import React, { Component } from 'react';
import './layout.css';
import MenuToggle from '../../components/Nav/MenuToggle/MenuToggle'
import Drawer from '../../components/Nav/Drawer/Drawer'

class Layout extends Component {

  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  render() {
    return (
      <div className="layout">


        <Drawer
          isOpen={ this.state.menu }
        />

        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>
          { this.props.children }
        </main>
      </div>
    )
  }
}

export default Layout;