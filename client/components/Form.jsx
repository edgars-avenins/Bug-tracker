import React from 'react'
import { connect } from 'react-redux'

import { addNewProject } from '../actions/projects'
import { addNewIssue } from '../actions/issues'

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
        if(this.props.view.view == 'projects'){
            this.props.addNewProject(this.state)
        }else if(this.props.view.view == 'issues'){
            const id = this.props.projects.chosenProject.id
            
            this.props.addNewIssue(this.state, id)
        }
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

const mapStateToProps = ({view, issues, projects}) => {return {view, issues, projects}}

export default connect(mapStateToProps, { addNewProject, addNewIssue })(Form)