import React from 'react'

export class Issue extends React.Component {
    render(){
        return(
            <h3>{this.props.data.name}</h3>
        )
    }
}