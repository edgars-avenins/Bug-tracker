import React from 'react'

export class Projects extends React.Component {
    constructor(props){
        super(props)


    }

    handleClick = () => {
        this.props.data.bugs.map(item => item.projectId = this.props.origin)
        this.props.onProjectClick(this.props.data.bugs, this.props.origin)
    }

    render(){
        return(
        <h3 onClick={this.handleClick}>{this.props.data.name}</h3>
        )
    }
}