import React from 'react'
import Project from './Project'


class Projects extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const projects = this.props.projects
        return(
            <div>
                {
                    (projects || ['Projects loading, Please Wait.']).map((project, i) => <Project key={i} info={project}/>)
                }
            </div>
        )
    }
}

export default Projects