import React, { Component } from 'react'
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: {}
        }

    }
    componentDidMount() {
        this.props.dashboardNotes()
    }
    static getDerivedStateFromProps(props, state) {
        if (props.notes.login.notesData.success) {
            return {
                notes: props.notes.login.notesData.data
            }
        }
    }
    handleEachItem = (item) => {
        console.log(item)
        this.props.history.push({ pathname: '/ItemDetails', state: { details: item } })
    }
    render() {
        return (
            <div>
                <h4>Dashboard</h4>
                <button type="button" className="log-out-button" onClick={() => this.props.history.push("/")}>Log Out</button>
                <div className={"container cards-container"}>
                    <div className="row">
                        {Object.keys(this.state.notes).length && this.state.notes.Notes.get('notes').map((_, k) => (
                            <div className="col-md-3" key={k} onClick={() => this.handleEachItem(_)}>
                                <div className="cc-card">
                                    <h5>{_.label}</h5>
                                    <span>{_.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dashboardNotes: () => dispatch({ type: "NOTES_REQUEST" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
