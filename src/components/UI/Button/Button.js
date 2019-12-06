import React from 'react'

import { ButtonElement } from './styles'


const Button = props => {

  const { children, onClick, disabled, type } = props;

  return (
    <ButtonElement
      className={ type }
      onClick={ onClick }
      disabled={ disabled }
    > { children }
    </ButtonElement>
  )
}

export default Button