import styled from 'styled-components'

export const FinishedQuizBlock = styled.div`
  padding: 20px;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  margin: 0 10px;
  
  i {
    margin-left: 10px;
    
    &.success {
      color: rgba(161,240,69,.7);
    }
    &.error {
      color: rgba(240,87,108,.7);
    }
  }
  

`