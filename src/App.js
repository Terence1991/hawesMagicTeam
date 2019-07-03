import React, { Component } from 'react';
import Profile from './Profile'

const clientsTeam = []

const dreamTeam = {
    uuidv1: {
        name: ' Mathew Kitching',
        phoneNumber: '514745943',
        email: 'ginger1@dingusmail.com',
        profileImg: "https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg",
    },  
    uuidv2: {
        name: ' Mark Conn',
        phoneNumber: '514745943',
        email: 'murph@dingusmail.com',
        profileImg: "https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg",
        isClicked: false,
    }, 
    
    uuidv3: {
        name: 'Andrew James',
        phoneNumber: '514745943',
        email: 'codegenuis@dingusmail.com',
        profileImg: "http://www.audienceseverywhere.net/wp-content/uploads/2014/02/grizzly_man_530.jpg",
        isClicked: false,
    }, 
    uuidv4: {
        name: 'Eric Washby',
        phoneNumber: '514745943',
        email: 'beer@dingusmail.com',
        profileImg: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Baby_turtle.jpg",
        isClicked: false,

    }, 
    uuidv5: {
        name: 'Emanuel payrez',
        phoneNumber: '514745943',
        email: 'mexico69@dingusmail.com',
        profileImg: "https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SY355_.jpg",
        isClicked: false,
    },  
    
    uuidv6: {
        name: 'Alex gordon',
        phoneNumber: '514745943',
        email: 'nerd@dingusmail.com',
        profileImg: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Yellow_Duck.jpg",
        isClicked: false, 
    }, 
}


        const clientSelection = (teamMember) => {
        if (!dreamTeam[teamMember]) {
          throw 'team member doesnt exist';
        }
        if (!dreamTeam[teamMember].isClicked) {
          clientsTeam.push(dreamTeam[teamMember])
          dreamTeam[teamMember].isClicked = true
          return teamMember + ' has been added to clients team'
        } else {
          return teamMember + ' has already been added to team'
        }
    }



const deleteTeamMember = (teamMember) => {
	if (!clientsTeam) {
		 throw 'Team does not exist';
	}
	
    const memberIndex = clientsTeam.IndexOf(teamMember);
	
	if (memberIndex === -1) {
		  throw 'Member is not part of team';
	};

    clientsTeam = clientsTeam.slice(memberIndex)
}


class App extends Component {
    render() {
        return (
            <div>
			{
				Object.keys(dreamTeam).map((key) => {
					return <Profile key={key} profile={dreamTeam[key]} />
				})
			}
            </div>
        )
    }
}


export default App;