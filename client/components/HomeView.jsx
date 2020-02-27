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
            showForm: false,
            newEntry: {bugs: []},
            propjectOrIssuesArr: []
        }
    }

    handleForm = () => {
        this.setState({ showForm: !this.state.showForm})
    }

    handleChange = e => {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                [e.target.name]: e.target.value
            }
        })
    }

    addEntry = e => {
        e.preventDefault()
        this.setState({
            projectArr: [
                ...this.state.projectArr,
                this.state.newEntry
            ],
            newEntry: {bugs: []}
        })
        this.handleForm()
    }

    handleView = () => {
        this.setState({ projectView: !this.state.projectView})
        this.setState({ propjectOrIssuesArr: []})
    }

    setIssues = (data) => {
        this.setState({ projectView: !this.state.projectView})
        this.setState({ propjectOrIssuesArr: data})
    }

    displayProjectsOrIssues = () => {
        if(this.state.projectView){
            return this.state.projectArr
        }else{
            return this.state.propjectOrIssuesArr
        }
    }

    render(){
        let display = this.displayProjectsOrIssues()
      
        return(
            <div>
                <h1>I'm an awesome Home view page</h1>
                <button onClick={this.handleForm}>NEW</button>
                {
                    this.state.showForm &&
                    <form onSubmit={this.addEntry}>
                        <div>
                            <label htmlFor="">Name:</label>
                            <input type="text" name="name" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">Description:</label>
                            <input type="text" name="description" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <input type="submit" />
                        </div>
                    </form>
                }
                {
                    !this.state.projectView &&
                    <button onClick={this.handleView}>BACK</button>
                }
                {
                    display.map((item,i) => {
                        return (
                            this.state.projectView ?
                            <Projects data={item} onProjectClick={this.setIssues} key={i}/>
                            : <Issues data={item} key={i}/>
                        )
                    })
                } 
            </div>
        )
    }
}