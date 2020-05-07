import React from 'react'
import { connect } from 'react-redux'

import { setForm } from '../actions/forms'



class Add extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className='splitDiv'>
                <button className='btnWidth' onClick={this.props.setForm}>ADD</button>
            </div>
        )
    }
}

const mapStateToProps = () => { return {}}

export default connect(mapStateToProps, { setForm })(Add)