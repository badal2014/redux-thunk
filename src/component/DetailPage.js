import React, { Component } from 'react'

export default class DetailPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: {}
        }
        if (window.performance) {
            if (performance.navigation.type == 1) {
                console.log("page refreshed")
                this.props.history.push('/Dashboard')
            } else {
            }
        }
    }
    render() {
        console.log(this.props.history.location.state)
        return (
            <div>
                <h4>Details</h4>
                <button type="button" className="log-out-button" onClick={() => this.props.history.push("/")}>Log Out</button>
                <div className={"container cards-container"}>
                    <div className="row">
                        {this.props.history.location.state !== undefined &&
                            <div className="col-md-3">
                                <div className="cc-card">
                                    <h5>{this.props.history.location.state.details.label}</h5>
                                    <span>{this.props.history.location.state.details.description}</span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div >
        )
    }
}