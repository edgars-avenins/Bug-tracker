import React from 'react'
import Issue from './Issue'


class Issues extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const issues = this.props.issues

        return(
            <div>
                {
                    issues ?
                    issues.map((issue, i) => <Issue key={i} info={issue || ''}/>)
                    :
                    <h3>Choose an Project first to see the issues it has!</h3>
                    
                }
            </div>
        )
    }
}

export default Issues