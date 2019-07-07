import React, { Component } from 'react';
import Profile from './Profile';
import TopBar from './TopBar';
import TeamList from './TeamList';
import styled from 'styled-components';
import SnackBar from './SnackBar';



let clientsTeam = []

const dreamTeam = {
    uuidv1: {
        name: ' Mathew Kitching',
        phoneNumber: '514745943',
        email: 'ginger1@dingusmail.com',
        profileImg: "https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg",
        job: "Code genuis",
        bio: "I love to play guitar and take long naps",
        isClicked: false,
    },  
    uuidv2: {
        name: ' Mark Conn',
        phoneNumber: '514745943',
        email: 'murph@dingusmail.com',
        profileImg: "https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg",
        job: "Code genuis",
        bio: "I ride my bike everywhere and have lots of tattos",
        isClicked: false,
    }, 
    
    uuidv3: {
        name: 'Andrew James',
        phoneNumber: '514745943',
        email: 'codegenuis@dingusmail.com',
        profileImg: "http://www.audienceseverywhere.net/wp-content/uploads/2014/02/grizzly_man_530.jpg",
        job: "Code genuis",
        bio: "the big lebowski is my favorite my movie",
        isClicked: false,
    }, 
    uuidv4: {
        name: 'Eric Washby',
        phoneNumber: '514745943',
        email: 'beer@dingusmail.com',
        profileImg: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Baby_turtle.jpg",
        job: "Army",
        bio: "I have a baby",
        isClicked: false,

    }, 
    uuidv5: {
        name: 'Emanuel payrez',
        phoneNumber: '514745943',
        email: 'mexico69@dingusmail.com',
        profileImg: "https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SY355_.jpg",
        job: "Code genuis/ Army",
        bio: "I love mexican and greek food",
        isClicked: false,
    },  
    
    uuidv6: {
        name: 'Alex gordon',
        phoneNumber: '514745943',
        email: 'nerd@dingusmail.com',
        profileImg: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Yellow_Duck.jpg",
        job: "Army Oficer",
        bio: "I like to to work alot",
        isClicked: false, 
    }, 
}




class App extends Component {
    state = {
        errorMessage: null,
        displayErrorMessage: false,
        clientsTeam: []    
    }
    
    clientSelection = (uuid) => {
        console.log('workinggg')
        if (!dreamTeam[uuid]) {
          this.displayErrorMessage('team member doesnt exist')
        }
        if (!dreamTeam[uuid].isClicked) {
            this.setState({
                clientsTeam: [...this.state.clientsTeam, dreamTeam[uuid]],
                response: `${dreamTeam[uuid].name} has been added to clients team`
            });
          dreamTeam[uuid].isClicked = true;
        } else {
            this.setState({
                response:  dreamTeam[uuid].name + ' has already been added to team'
            });
        }
    }
    
     refershTeamSelection = () => {
         console.log("im working")
        clientsTeam = []
    } 
    
    
    deleteTeamMember = (uuid) => {
        console.log("im working")
    if (!this.state.clientsTeam.length) {
       this.displayErrorMessage('Team Member does not Exist or has already been deleted')
       return;
    }
    
    this.setState({
        clientsTeam: this.state.clientsTeam.filter((profile) => profile.phoneNumber !== dreamTeam[uuid].phoneNumber)
    });
    dreamTeam[uuid].isClicked = false;
    }
    
    
     displayErrorMessage = (error) => {
        this.setState({
            errorMessage: error,
            displayErrorMessage: true,  
        })
    
        setTimeout(() => {
            this.setState({
                errorMessage: null,
                displayErrorMessage: false, 
            })
        }, 3000)
    
    }



render() {

    const { errorMessage, displayErrorMessage, clientsTeam } = this.state;
    return (
        <Wrapper>
            <TopBar displayErrorMessage={displayErrorMessage} refershteamselection={this.refershTeamSelection}>
                <SnackBar errorMessage={errorMessage}/>
            </TopBar>

        {
            Object.keys(dreamTeam).map((key) => {
                return (
                    <Profile 
                        key={key}  
                        profile={dreamTeam[key]} 
                    >
                        <ButtonContainer>
                            <Btn onClick={() => this.deleteTeamMember(key)}>
                                Remove Team Member
                            </Btn>
                            <Btn onClick={() => this.clientSelection(key)}>
                                Add Team Member 
                            </Btn> 
                        </ButtonContainer>
                    </Profile>

                )
            })
        }
        <TeamList>
            {
                clientsTeam && clientsTeam.map((profile, index) => {
                    return (
                        <Profile key={index} profile={profile}/>
                    )
                })
            }
        </TeamList>
     
        </Wrapper>
    )
}
}


export default App;


const Wrapper = styled.div`
  color: #F8F8FF;
  background-attachment: fixed;
  background-repeat: no-repeat;
`
const ButtonContainer = styled.div`
    height: 60px;
    background-color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 17px;
    color: #008CBA;
    border-radius:0 0 7px 7px;
`

const Btn = styled.div`
        all: unset;
      padding: 0;
      width:49%;
      transition: all 0.2s;
      cursor:pointer;
      &:first-child{border-right:2px solid #ecf0f1;}
      &:hover{ font-size: 19px;}
`