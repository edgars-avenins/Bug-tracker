import React from 'react'
import { Projects } from './Projects'
import { Issues } from './Issues'

export class HomeView extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            projectArr: [
                {
                    name: 'Bug Tracker',
                    description: 'Project idea that is going to help me a lot with other project ideas',
                    bugs: [
                        {
                            name: 'Wrong data type passed',
                            description: 'When the data is sent from <Projects> to <HomeView> the type is incorrect'
                        },
                        {
                            name: 'Missing data',
                            description: 'When the data is sent from <Projects> to <HomeView> the type is incorrect'
                        },
                        {
                            name: 'Wrong behaviour after button click',
                            description: 'When the data is sent from <Projects> to <HomeView> the type is incorrect'
                        }
                    ]
                },
                {
                    name: 'Expense Tracker',
                    description: 'Project idea that is going to help me keep a track of my expenses',
                    bugs: []
                },
                {
                    name: 'Assignment Tracker',
                    description: 'Project idea that is going to help me with staying on top of my assignments',
                    bugs: []
                }
            ],
            projectView: true,
            propjectOrBugArr: []
        }
    }

    handleClick = () => {
        
    }

    handleView = () => {
        this.setState({ projectView: !this.state.projectView})
        this.setState({ propjectOrBugArr: []})
    }

    displayProjectsOrIssues = (data) => {
        this.setState({ projectView: !this.state.projectView})
        this.setState({ propjectOrBugArr: data})
    }

    render(){
        let display
        if(this.state.projectView){
            display = this.state.projectArr
        }else{
            display = this.state.propjectOrBugArr
        }
        return(
            <div>
                <h1>I'm an awesome Home view page</h1>
                <button onClick={this.handleClick}>NEW</button>
                {
                    !this.state.projectView &&
                    <button onClick={this.handleView}>BACK</button>
                }
                {
                    display.map((item,i) => {
                        return (
                            this.state.projectView ?
                            <Projects data={item} onProjectClick={this.displayProjectsOrIssues} key={i}/>
                            : <Issues data={item} key={i}/>
                        )
                    })
                } 
            </div>
        )
    }
}