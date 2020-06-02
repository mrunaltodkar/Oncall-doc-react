import React, { Component } from 'react'
import "./Welcome.css"

export class Welcome extends Component {
    
    render() {
        return (
            <div className="welcome">
                <h1>Welcome {this.props.location.state.data.username}</h1>
            </div>
        )
    }
}

export default Welcome