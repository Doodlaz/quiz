import styled from 'styled-components'

export const ButtonElement = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #000;
  margin-right: 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  transition: .3s;
 
  &:not(:hover) {
    box-shadow: 0 3px 14px -4px rgba(0, 0, 0, 0.788235294117647);
  }
  
  &:active {
    opacity: .8;
    border-color: rgba(0,0,0,0);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  
  &.success {
    background: rgba(161,240,69,1);
    color: #333;
  }
  
  &.error {
    background: rgba(240,87,108,1);
  }
  
  &.primary {
    background: #2884f6;
    color: #fff;
  }
  
`