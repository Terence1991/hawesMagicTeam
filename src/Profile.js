import React, { Component } from "react";
import App from "./App";
import Button from '@material-ui/core/Button';



export class Profile extends React.Component { 
    render() {
        console.log(this.props)
        return (
            <div>
                Profile
                <Button onClick={this.props.clientselection} className='AddButton 'variant="contained" color="primary">
                    Add Team Member 
                </Button> 
            </div>
        )
    }
}

export default Profile;