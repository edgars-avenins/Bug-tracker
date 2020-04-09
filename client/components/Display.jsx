import React from 'react'
import { connect } from 'react-redux'

import { getProjects } from '../actions/projects'

import Projects from './Projects'
import Issues from './Issues'

class Display extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.getProjects()
        //change redux state to use additional values for displaying components
    }

    render(){
        const projects = this.props.projects.projects || ''
        const issues = this.props.issues.issues || ''
        const view = this.props.view.view
        return(
            <div className='displayFrame'>
                {
                    view == 'projects' ?
                    <Projects projects={projects}/>
                    :
                    <>
                    {
                        view == 'issues' ?
                        <Issues issues={issues} />
                        :
                        <h1>Loading, WAIT!!!</h1>
                    }
                    </>
                }
                
            </div>
        )
    }
}

const mapStateToProps = ({ projects, view, issues }) => {
    return {
        projects,
        view,
        issues
    }
}
export default connect(mapStateToProps, { getProjects })(Display)