import React, { Component } from 'react';
import Profile from './Profile'

const dreamteam = {
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



//need to set up function to push onto arrary
//figure out how to set up flag to check if custom clicks it
const clientSelection = (teamMember) => {
    const team = []
    if(!isClicked) {
     team.push(Object.keys())
    }
    
    
    return team;
}


//function to set individual flag  on object to click 
const customerClick = () => {

}


class App extends Component {
    render() {
        return (
            <div>
			{
				Object.keys(dreamteam).map((key) => {
					return <Profile key={key} profile={dreamteam[key]} />
				})
			}
            </div>
        )
    }
}


export default App;