import React from 'react'

class Project extends React.Component{

    render(){
        const data = this.props.info
        return(
            <>
            {
                data ? 
                <div>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                </div>
                :
                <h3>Projects Loading, Please Wait!</h3>
            }
            </>
        )
    }
}

export default Project