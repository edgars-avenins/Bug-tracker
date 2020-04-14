import React from 'react'


class Details extends React.Component {

    handleClick = (e) => {
        console.log(e.target)
        
        
    }

    render(){
        const data = this.props.info
        return(
            <>
            {
                data ? 
                <div onClick={this.handleClick}>
                    <h3>{data.projectName}</h3>
                    <h5>{data.projectDescription}</h5>
                    <hr/>
                    <h4>{data.issueName}</h4>
                    <h6>{data.issueDescription}</h6>
                    <hr/>
                    <p>Priority level: {data.priority}</p>
                </div>
                :
                <h3>Choose an Issue first to see more information about it!</h3>
            }
            </>
        )
    }
}


export default Details