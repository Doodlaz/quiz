import React, { Component } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop'
import { DrawerNav } from './styles';

const links =[
  1, 2, 3
]

class Drawer extends Component {

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          Link {link}
        </li>
      )
    })
  }

  render () {
    return (
      <>
        <DrawerNav
          className={!this.props.isOpen ? 'close' : ''}
        >
          <ul>
            { this.renderLinks() }
          </ul>
        </DrawerNav>

        { this.props.isOpen ? <Backdrop /> : null }
      </>

    )
  }
}
export default Drawer