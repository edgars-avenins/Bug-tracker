import React from 'react'
import { connect } from 'react-redux'

import { getProjects } from '../actions/projects'

import Projects from './Projects'

class Display extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.getProjects()
    }

    render(){
        const projects = this.props.projects.projects
        return(
            <div className='displayFrame'>
                <Projects projects={projects}/>
            </div>
        )
    }
}

const mapStateToProps = ({ projects }) => {
    return {
        projects
    }
}
export default connect(mapStateToProps, { getProjects })(Display)