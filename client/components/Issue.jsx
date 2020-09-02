import React from 'react'
import { connect } from 'react-redux'

import { setDisplay, getDetails } from '../actions/setDisplay'

class Issue extends React.Component {

    handleClick = (e) => {
        const id = e.target.id
        
        this.props.setDisplay('details')
        this.props.getDetails(id)
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
                <h3>Issues Loading, Please Wait!</h3>
            }
            </>
        )
    }
}

const mapStateToProps = ({ details }) => {
    return {
        details
    }
}
export default connect(mapStateToProps, { setDisplay, getDetails })(Issue)