import React from 'react'

export class Issues extends React.Component {
    render(){
        return(
            <h1>{this.props.data.name}</h1>
        )
    }
}