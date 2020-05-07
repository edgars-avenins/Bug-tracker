import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logoutUser } from '../actions/logout'


class Access extends React.Component{
    constructor(props){
        super(props)

    }

    handleLogout = () => {
        this.props.logoutUser()
    }

    render(){
        const auth = this.props.auth
        return(
            <div>
                <ul className='displayFlex'>
                    {
                    !auth ?
                        <>
                            <li className='navItems'><Link to="/register">Sign Up</Link></li>
                            <li className='navItems'><Link to="/login">Log in</Link></li>
                        </>
                    :
                        <>
                            <li className='navItems'><Link to="/user">Profile</Link></li>
                            <li className='navItems'><a href="#" onClick={this.handleLogout}>Log out</a></li>
                        </>
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({}) => {return{}}
export default connect(mapStateToProps, { logoutUser })(Access)