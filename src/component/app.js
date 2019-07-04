import React, { Component } from 'react'
import Main from './main';
import User from './user'
import { connect } from 'react-redux';

class Parent extends Component {
    constructor(props){
        super(props)
        
    }
    changeUserName(newName){
        
        // this.setState({
        //     userName :newName
        // })
    }
    render() {
        console.log(this.props);
        
        return (
            <div className="container">
                <Main {...this.props} changeUserName={() => this.props.setName(20)}/>
                <User {...this.props} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("main page" , state)
    return {
        states : state
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        setName : (name) => dispatch({type : "SET_NAME" , payload : name})
        }
    }

export default connect(mapStateToProps , mapDispatchToProps)(Parent)
