import React from 'react'
import Project from './Project'


class Projects extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {Array.from({length: 10}, (v, i) => <Project key={i} />)}
            </div>
        )
    }
}

export default Projects