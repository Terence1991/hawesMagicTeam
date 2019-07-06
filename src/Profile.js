import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import styled from 'styled-components'


export class Profile extends React.Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <ProfilePicContainer>
                <ProfilePic src={this.props.profile.profileImg}></ProfilePic>
                </ProfilePicContainer>
                <Button onClick={this.props.deleteteam} className='deleteButton' variant='contained' color="prmary">
                    Delete Team Member
                </Button>
                <Button onClick={this.props.clientselection} className='addButton 'variant="contained" color="primary">
                    Add Team Member 
                </Button> 
            </div>
        )
    }
}

export default Profile;


const ProfilePic = styled.img`
  height: 300px;
  width: 300px;
  background: #222;
  background-size: cover;
  border-radius: 50%;
`

 const ProfilePicContainer = styled.body`
  height: 300px;
  width: 300px;
  background: #222;
  background-size: cover;
  border-radius: 50%;
 `
const nameContainer = styled.span`
font-size: 30px;

`