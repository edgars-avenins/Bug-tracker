import React from 'react'

export class Projects extends React.Component {
    constructor(props){
        super(props)


    }

    handleClick = () => {
        this.props.onProjectClick(this.props.data.bugs)
    }

    render(){
        return(
        <h1 onClick={this.handleClick}>{this.props.data.name}</h1>
        )
    }
}