import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';




export class TopBar extends React.Component {
    render() {
        return (
            <Header onClick={this.refreshteamselection}>
                <Title>
                Hawes Magic Team
                </Title>
                <Button >Refresh Team</Button>
            </Header>
        )
    }

}

export default TopBar;

const Header = styled.header`
  line-height: 60px;
  font-weight: 400;
  box-shadow: 0 1px 3px 0 #5E35B1;
  height: 60px;
  background-color: #7E57C2;
  top: 0;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 10000;
`

const Title = styled.span`
  color: #fff;
  height: 60px;
  float: left;
  margin-right: 30px;
  margin-top: 0;
  font-size: 24px;
  font-family: 'Coiny', sans-serif;
  font-variant: small-caps;
`

