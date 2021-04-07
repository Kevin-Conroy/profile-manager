import React from "react"
import ProfileData from './ProfileData'

function UserProfile(props) {
    return (
        <div>
            <h3>Name: {props.firstName}&nbsp;{props.lastName}</h3>
            <h4>Role: {props.role}</h4>
            <h5>id: {props.id}</h5>

        </div>
    )
}



export default UserProfile;