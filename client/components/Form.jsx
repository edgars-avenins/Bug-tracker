import React from 'react'
import { connect } from 'react-redux'

import { addNewProject } from '../actions/projects'

class Form extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            description: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.addNewProject(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>Project name:
                    <input onChange={this.handleChange} type="text" name='name' value={this.state.name}/>
                </label>
                <label>Description:
                    <input onChange={this.handleChange} type="text" name='description' value={this.state.description}/>
                </label>
                <input type="submit"/>
            </form>
            </>
        )
    }
}

const mapStateToProps = () => {return{}}

export default connect(mapStateToProps, { addNewProject })(Form)