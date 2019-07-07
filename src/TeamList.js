import React from 'react';
import styled from 'styled-components';


export class TeamList extends React.Component{
  render() {
    return (
      <ListWrapper>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </ListWrapper>
    )
  }

}

export default TeamList; 

const ListWrapper = styled.div`
  padding: 8px;
  
`
const Title = styled.h1`
    height: 96px;
    width: 400px; 
    padding: 8px;
    color: black;

`