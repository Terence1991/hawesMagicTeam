import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import styled from 'styled-components'


export class Profile extends React.Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <InformationContainer>
                    <ProfilePicContainer>
                        <ProfilePic src={this.props.profile.profileImg}></ProfilePic>
                    </ProfilePicContainer>
                    <NameContainer>
                        {this.props.profile.name}
                    </NameContainer>
                    <JobContainer>
                        {this.props.profile.job}
                    </JobContainer>
                    <EmailContainer>
                        {this.props.profile.email}
                    </EmailContainer>
                    <BioConatiner>
                        {this.props.profile.bio}
                    </BioConatiner>
                </InformationContainer>
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

 const InformationContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
    text-align: center;
 `

const NameContainer = styled.span`
font-size: 30px;
`
const JobContainer = styled.span`
     font-size: 20px;
     color: 	#6495ED;
   `

const EmailContainer = styled.span`
    font-size: 20px;
    color: 	#6495ED;
`

const BioConatiner = styled.span`
    font-size: 20px;
    color: 	#6495ED;

`
