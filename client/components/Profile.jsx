import React from 'react'
import { connect } from 'react-redux'
import { getUserProfile } from '../apis/users'

class Profile extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            userData: ''
        }
    }

    componentDidMount(){

        getUserProfile(this.props.auth.user.email)
            .then(data => {
                this.setState({
                    userData: data
                })
            })
    }
        
        render(){
            const data = this.state.userData
            return(
                <div>
                    <h3>Hi {data.firstName} {data.lastName}</h3>
                    <p>Email: {data.email}</p>
                </div>
        )
    }
}
const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
}
export default connect(mapStateToProps, {})(Profile)