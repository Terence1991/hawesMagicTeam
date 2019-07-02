import React, { Component } from 'react';
import uuidv1  from 'uuid/v1'
import Profile from './Profile'


const dreamteam = {
    uuidv1: {
        name: ' Mathew Kitching',
        phoneNumber: '514745943',
        email: 'ginger1@dingusmail.com',
        profileImg: "https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg"
    },  
    uuidv2: {
        name: ' Mark Conn',
        phoneNumber: '514745943',
        email: 'murph@dingusmail.com',
        profileImg: "https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg"
    }, 
    
    uuidv3: {
        name: 'Andrew James',
        phoneNumber: '514745943',
        email: 'codegenuis@dingusmail.com',
        profileImg: "http://www.audienceseverywhere.net/wp-content/uploads/2014/02/grizzly_man_530.jpg"
    }, 
    uuidv4: {
        name: 'Eric Washby',
        phoneNumber: '514745943',
        email: 'beer@dingusmail.com',
        profileImg: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Baby_turtle.jpg"
    }, 
    uuidv5: {
        name: 'Emanuel payrez',
        phoneNumber: '514745943',
        email: 'mexico69@dingusmail.com',
        profileImg: "https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SY355_.jpg"
    },  
    
    uuidv6: {
        name: 'Alex gordon',
        phoneNumber: '514745943',
        email: 'nerd@dingusmail.com',
        profileImg: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Yellow_Duck.jpg"
    }, 
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