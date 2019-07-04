import React, { Component } from "react";
import App from "./App";
import Button from '@material-ui/core/Button';



export class Profile extends React.Component { 
    render() {
        console.log(this.props)
        return (
            <div>
                <Button onClick={this.props.deleteteam} className='deleteButton' variant='contained' color="red">
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