import React from 'react';
import styled from 'styled-components'


export class SnackBar extends React.Component {
  render() {
    const { errorMessage } = this.props;
   return(
    <Error>
      {errorMessage}
    </Error>
   )
  }
}
export default SnackBar;


const Error = styled.span`
    color: white;
    font-weight: bold;
    background-color: lightseagreen;
    border: 3px solid #188781;
    padding: 0.5rem;
`