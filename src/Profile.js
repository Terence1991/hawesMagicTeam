import React, { Component } from "react";
import App from "./App";
import Button from '@material-ui/core/Button';



export class Profile extends React.Component { 
    render() {
        return (
            <div>
                Profile

                <Button variant="contained" color="Primary">
                Add Team Member 
                </Button> 
            </div>
        )
    }
}

export default Profile;