import React from 'react'

import Add from './Add'
import Edit from './Edit'
import Delete from './Delete'

class Controls extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div id='buttonLayout' className='displayFlex'>
                <Add />
                <Edit />
                <Delete />
            </div>
        )
    }
}

export default Controls