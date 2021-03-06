import React from 'react'
import { connect } from 'react-redux'

import {setDisplay} from '../actions/setDisplay'
import {getIssues} from '../actions/issues'
import {setChosenProject} from '../actions/projects'

class Project extends React.Component{

    handleClick = (e) => {
        const id = e.target.id
        //set redux state
        this.props.setDisplay('issues')
        this.props.getIssues(id)
        this.props.setChosenProject(id)

    }

    render(){
        const data = this.props.info
        return(
            <>
            {
                data ? 
                <div id={data.id} onClick={this.handleClick}>
                    <h3 id={data.id}>{data.name}</h3>
                    <p id={data.id}>{data.description}</p>
                </div>
                :
                <h3>Projects Loading, Please Wait!</h3>
            }
            </>
        )
    }
}

const mapStateToProps = ({ projects }) => {
    return {
        projects
    }
}
export default connect(mapStateToProps, {setDisplay, getIssues, setChosenProject})(Project)