import React from 'react';
import styled from 'styled-components';


export class TeamList extends React.Component{
  render() {
    return (
      <ListWrapper>
        {this.props.children}
      </ListWrapper>
    )
  }

}

export default TeamList; 

const ListWrapper = styled.div`



`