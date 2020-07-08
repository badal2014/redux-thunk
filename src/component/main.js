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
        // console.log(this.state.notes.Notes.get('notes').length)
        return (
            <div>
                <h4>Notes</h4>
                <h6>{Object.keys(this.state.notes).length && this.state.notes.Notes.get('notes').length} Notes</h6>
                <button type="button" className="log-out-button" onClick={() => this.props.history.push("/")}>Log Out</button>
                <div className={"container cards-container"}>
                    <div className="cc-card-row">
                        {Object.keys(this.state.notes).length && this.state.notes.Notes.get('notes').map((_, k) => (
                            <div className="cc-card-main" key={k} onClick={() => this.handleEachItem(_)}>
                                <div className="cc-card" style={{ backgroundColor: _.color }}>
                                    <h5>{_.label}</h5>
                                    <span>{_.description}</span>
                                    <label className="cc-card-date">{_.date}</label>
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
