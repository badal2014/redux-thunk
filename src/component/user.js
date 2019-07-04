import React, { Component } from 'react'

export default class User extends Component {
    render() {
        console.log("in user" , this.props);
        
        return (
            <div>
                <h4>In User</h4>
                <h5>UserName : {this.props.states.math.math.name}</h5>
                <h5>UserName : {this.props.states.math.math.result}</h5>

            </div>
        )
    }
}
