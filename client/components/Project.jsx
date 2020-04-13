import React from 'react'
import { connect } from 'react-redux'

import {setDisplay} from '../actions/setDisplay'

class Project extends React.Component{

    handleClick = (e) => {
        const id = e.target.id
        
        this.props.setDisplay('issues', id)
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
export default connect(mapStateToProps, {setDisplay})(Project)