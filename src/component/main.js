import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        console.log("in main " , this.props);
        
        return (
            <div>
                <button type="button" onClick={() => this.props.changeUserName("Badal")}>Change User Name</button>
            </div>
        )
    }
}
