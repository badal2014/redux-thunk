import React, { Component } from 'react'
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            password: ""
        }
    }
    componentDidMount() {
        this.props.loginRequest()
    }
    handleForm = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }
    static getDerivedStateFromProps(props, state) {
        console.log("asdasda", props)
    }
    handleLogin = () => {
        var uDetails = this.props.states.login.login.data.allUsers.get('users')
        if (this.state.userName == uDetails.username && this.state.password == uDetails.password) {
            this.props.history.push("Dashboard")
        } else {
        }
    }
    render() {
        const { userName, password } = this.state
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className={"LoginContainer"}>
                            <div className="brand-logo">
                                <h1>Welcome</h1>
                            </div>
                            <div className="login-form">
                                <div className="login-form-heading">
                                    <h3>Login to your account</h3>
                                </div>
                                <div className="login-form-inner">
                                    <form onSubmit={this.handleLogin}>
                                        <input type="email" name="email" name={"userName"} value={userName} onChange={this.handleForm} />
                                        <input type="password" name="password" name={"password"} value={password} onChange={this.handleForm} />
                                        <button type="submit" class="login-btn" onClick={this.handleLogin}>Sign in With Gmail</button>
                                    </form>
                                </div>
                            </div>
                        </div >
                    </div>
                    <div className="col-lg-8 authfy-panel-right">
                        <div class="product-detials">
                            <h3>Welcome</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("main page", state)
    return {
        states: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: () => dispatch({ type: "loginRequest" }),
        setName: (name) => dispatch({ type: "SET_NAME", payload: name })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
