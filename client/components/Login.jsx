import React from 'react'

class Login extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <ul className='displayFlex'>
                    <li className='navItems'><a href="#">Sign Up</a></li>
                    <li className='navItems'><a href="#">Log in</a></li>
                </ul>
            </div>
        )
    }
}

export default Login