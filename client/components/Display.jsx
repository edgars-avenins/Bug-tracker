import React from 'react'
import { connect } from 'react-redux'

import { getProjects } from '../actions/projects'

import Projects from './Projects'
import Issues from './Issues'
import Details from './Details'

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
        const details = this.props.details.details || ''
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
                        <>
                        {
                            view == 'details' ?
                            <Details info={details} />
                            :
                            <h1>Loading, WAIT!!!</h1>
                        }
                        </>
                    }
                    </>
                }
                
            </div>
        )
    }
}

const mapStateToProps = ({ projects, view, issues, details }) => {
    return {
        projects,
        view,
        details,
        issues
    }
}
export default connect(mapStateToProps, { getProjects })(Display)