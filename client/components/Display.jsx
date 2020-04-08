import React from 'react'
import Projects from './Projects'

class Display extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className='displayFrame'>
                <Projects/>
            </div>
        )
    }
}

export default Display