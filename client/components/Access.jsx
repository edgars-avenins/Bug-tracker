import React from 'react'
import { Link } from 'react-router-dom'

class Access extends React.Component{
    constructor(props){
        super(props)

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
                            <li className='navItems'><Link to="/logout">Log out</Link></li>
                        </>
                    }
                </ul>
            </div>
        )
    }
}

export default Access