import React from 'react'
import { connect } from 'react-redux'

import { loginUser } from '../actions/login'

class Login extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            hash: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state)
    }

    render(){
        return(
                <form onSubmit={this.handleLogin}>
                    <label>Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <label>Password:
                        <input type="password" name="hash" value={this.state.hash} onChange={this.handleChange}/>
                    </label>
                        <input type="submit"/>
                </form>
        )
    }
}

const mapStateToProps = ({}) => {return{}}
export default connect(mapStateToProps, { loginUser })(Login)