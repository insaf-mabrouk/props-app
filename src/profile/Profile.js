import React from 'react'
import ReactPropTypesSecret from 'prop-types'

const Profile = (props) => {

    return (
        <div>
            {/* {{props.handleAlert(props.fullName)}} */}
            <h2>My name is {props.fullName}</h2>
            <h2>{props.bio}</h2>
            <h2>I am {props.profession}</h2>
            <button onClick={()=>props.handleAlert(props.fullName)}>click me</button>
            
        </div>
       
    )
    Profile.defaultProps={
        fullName : "Haroon"
    }
    Profile.ReactPropTypesSecret={
        fullName : ReactPropTypesSecret.string

    }
}

export default Profile
