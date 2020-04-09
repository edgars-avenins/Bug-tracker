import React from 'react'

class Issue extends React.Component {
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

export default Issue