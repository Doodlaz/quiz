import styled from 'styled-components'

export const MenuToggleBlock = styled.i`
  position: fixed;
  top: 40px;
  left: 40px;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  transition: .22s ease-in;
  
  &:hover {
  opacity: .7;
  }
  
  &.open {
    left: 320px;
    z-index: 51;
  }
`