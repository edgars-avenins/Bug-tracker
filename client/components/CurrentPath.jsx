import React from 'react'
import { connect } from 'react-redux'

import { setDisplay } from '../actions/setDisplay'

class CurrentPath extends React.Component{
    constructor(props){
        super(props)

    }

    handleClick = (e) => {
        const view = e.target.id

        this.props.setDisplay(view)
    }

    render(){
        return(
            <div>
                <h5>
                    <span id='projects' onClick={this.handleClick}>Projects </span>|
                    <span id='issues' onClick={this.handleClick}> Issues </span>|
                    <span id='details' onClick={this.handleClick}> Details</span>
                </h5>

            </div>
        )
    }
}

const mapStateToProps = ({ view }) => {
    return {
        view
    }
}
export default connect(mapStateToProps, { setDisplay })(CurrentPath)