import React from 'react'

class Nav extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div id='navContainer'>
                <ul className='displayFlex'>
                    <li className='navItems'><a href="/"><img src="/images/bug.png" alt="bug icon" height='50'/></a></li>
                    <li className='navItems'><a href="/">Home</a></li>
                    <li className='navItems'><a href="#">Link 1</a></li>
                    <li className='navItems'><a href="#">Link 2</a></li>
                    <li className='navItems'><a href="#">Link 3</a></li>
                </ul>
            </div>
        )
    }
}

export default Nav