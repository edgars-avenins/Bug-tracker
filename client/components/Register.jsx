import React from 'react'
import { connect } from 'react-redux'

import {registerUserRequest} from '../actions/register'

class Register extends React.Component{
    constructor(props){
        super(props)

    }

    handleClick = () => {
        this.props.registerUserRequest({first_name: 'Loco', last_name: 'Coco', email: 'edgars@gmail.com', hash: '123456789012'})
    }

    render(){
        return(
                <button onClick={this.handleClick}>Register</button>
        )
    }
}

const mapStateToProps = ({}) => {return{}}
export default connect(mapStateToProps, { registerUserRequest })(Register)