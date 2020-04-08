import React from 'react'


class Profile extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <ul className='displayFlex'>
                    <li className='navItems'><a href="#">Profile</a></li>
                    <li className='navItems'><a href="#">Log out</a></li>
                </ul>
            </div>
        )
    }
}

export default Profile