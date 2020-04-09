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
                    (issues || ['Issues loading, Please Wait.']).map((issue, i) => <Issue key={i} info={issue}/>)
                }
            </div>
        )
    }
}

export default Issues