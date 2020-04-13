import React from 'react'

class CurrentPath extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <h5>
                    <a href="#">All</a>
                    |
                    <a href="#">Project</a> 
                     | 
                    <a href="#">Issue</a>
                     | 
                    <a href="#">Details</a>
                     | 
                    <a href="#">Status</a>
                    </h5>
            </div>
        )
    }
}

export default CurrentPath