import React, { useState } from 'react';
import './layout.css';
import MenuToggle from '../../components/Nav/MenuToggle/MenuToggle'
import Drawer from '../../components/Nav/Drawer/Drawer'

const Layout = props => {
  const { children } = props;
  const [menuState, setMenuState] = useState(false);

  const toggleMenuHandler = () => { setMenuState( !menuState ) };

  return (
    <div className="layout" >
      <Drawer isOpen={ menuState } />

      <MenuToggle
        onToggle={ toggleMenuHandler }
        isOpen={ menuState }
      />

      <main> { children } </main>
    </div>
  )

};

export default Layout;