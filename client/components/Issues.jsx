import React from 'react'

export class Issues extends React.Component {
    render(){
        console.log(this)
        return(
            <h1>{this.props.data.name}</h1>
        )
    }
}