import React from 'react'

import { MenuToggleBlock } from './styles';


const MenuToggle = props => {

  const { onToggle, isOpen } = props;

  return (
    <MenuToggleBlock
       className={'fa ' + (isOpen ? 'fa-times open' : 'fa-bars')}
       onClick={onToggle}
    />
  )
}
export default MenuToggle