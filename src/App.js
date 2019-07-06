import React, { Component } from 'react';
import Profile from './Profile';
import TopBar from './TopBar'

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

const refershTeamSelection = () => {
    clientsTeam = []
} 


const deleteTeamMember = (uuid) => {
if (!clientsTeam) {
     throw new Error('Team Member does not Exist or has already been d')
}

const memberIndex = clientsTeam.indexOf(dreamTeam[uuid]);

if (memberIndex === -1) {
    alert('Member not added to the team ')
};

clientsTeam = clientsTeam.slice(memberIndex)
}


class App extends Component {
render() {
    return (
        <div>
            <TopBar refershteamselection={() => refershTeamSelection()}/>
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