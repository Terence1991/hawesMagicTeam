import React, { Component } from 'react';
import Profile from './Profile';

let clientsTeam = []

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


const clientSelection = (uuid) => {

    if (!dreamTeam[uuid]) {
      throw new Error('team member doesnt exist')
    }
    if (!dreamTeam[uuid].isClicked) {
      clientsTeam.push(dreamTeam[uuid])
      dreamTeam[uuid].isClicked = true
      return dreamTeam[uuid].name + ' has been added to clients team';
    } else {
      return dreamTeam[uuid].name + ' has already been added to team';
    }
}



const deleteTeamMember = (uuid) => {
if (!clientsTeam) {
     throw new Error('Team Member does not Exist or has already been d')
}

const memberIndex = clientsTeam.IndexOf(dreamTeam[uuid]);

if (memberIndex === -1) {
    throw new Error('Member is not part of team')
};

clientsTeam = clientsTeam.slice(memberIndex)
}


class App extends Component {
render() {
    console.log(clientsTeam)
    return (
        <div>
        {
            Object.keys(dreamTeam).map((key) => {
                return <Profile 
                key={key}  
                deleteteam={() => deleteTeamMember(key)}
                clientselection={() => clientSelection(key)} 
                profile={dreamTeam[key]} 
                />
            })
        }
        </div>
    )
}
}


export default App;