import React from "react";
import Button from '@material-ui/core/Button';
import styled from 'styled-components'


export class Profile extends React.Component {
    render() {
        return (
                <Card>
                    <ImgContainer>
                        <ProfilePic src={this.props.profile.profileImg}></ProfilePic>
                    </ImgContainer>
                    <InfoContainer>
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
                    </InfoContainer>
                    {this.props.children}
                </Card>
            
        )
    }
}

export default Profile;

const Card = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 450px;
  background-color: #FFFAF0;
  border-radius: 7px;
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.3); 
`

const ImgContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 195px;
`

const ProfilePic = styled.img`
    height: 120px;
    border-radius:100%;
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);  
`
const InfoContainer = styled.div`
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
