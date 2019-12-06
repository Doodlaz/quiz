import styled from 'styled-components'

export const AnswerLi = styled.li`
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: .3s;
  
  &:hover {
    background: rgba(255,255,255,.15);
  }
  
  &.success {
    color: rgba(161,240,69,.7);
  }
  &.error {
    color: rgba(240,87,108,.7);
  }
`