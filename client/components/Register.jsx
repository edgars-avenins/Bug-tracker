import React from 'react'
import { connect } from 'react-redux'

import {registerUserRequest} from '../actions/register'

class Register extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            hash: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = (e) => {
        e.preventDefault()
        this.props.registerUserRequest(this.state)
    }

    render(){
        return(
                <form onSubmit={this.handleRegister}>
                    <label>Name:
                        <input type="text" name="firstName" onChange={this.handleChange}/>
                    </label>
                    <label>Lastname:
                        <input type="text" name="lastName" onChange={this.handleChange}/>
                    </label>
                    {/* add email and password validation */}
                    <label>Email:
                        <input type="email" name="email" onChange={this.handleChange}/>
                    </label>
                    <label>Password:
                        <input type="password" name="hash" onChange={this.handleChange}/>
                    </label>
                    <input type="submit"/>
                </form>
        )
    }
}

const mapStateToProps = ({}) => {return{}}
export default connect(mapStateToProps, { registerUserRequest })(Register)