import React from 'react'


class Details extends React.Component {

    handleClick = (e) => {
        //console.log(e.target)
        
        
    }

    render(){
        const { details, assignedUser, projectUser, issueUser } = this.props.info
        return(
            <>
            {
                details ? 
                <div onClick={this.handleClick}>
                    <h3>{details.projectName}</h3>
                    <h5>{details.projectDescription}</h5>
                    <p>Project started by {projectUser.projectFirstName} {projectUser.projectLastName}</p>
                    <a href={`mailto:${projectUser.projectEmail}`}>{projectUser.projectEmail}</a>
                    <hr/>
                    <h4>{details.issueName}</h4>
                    <h6>{details.issueDescription}</h6>
                    <p>Issue started by {issueUser.issueFirstName} {issueUser.issueLastName}</p>
                    <a href={`mailto:${issueUser.issueEmail}`}>{issueUser.issueEmail}</a>
                    <hr/>
                    <p>Priority level: {details.priority}</p>
                    <hr/>
                    <h4>Assigned user: </h4>
                    {
                        details.assigned == true ?
                        <>
                        <h6>{assignedUser.assignedFirstName} {assignedUser.assignedLastName}</h6>
                        <a href={`mailto:${assignedUser.assignedEmail}`}>{assignedUser.assignedEmail}</a>
                        </>
                        :
                        <h5>None</h5>
                    }
                </div>
                :
                <h3>Choose an Issue first to see more information about it!</h3>
            }
            </>
        )
    }
}


export default Details