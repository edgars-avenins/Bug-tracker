import React from 'react'
import update from 'react-addons-update'
import { Projects } from './Projects'
import { Issues } from './Issues'

export class HomeView extends React.Component {
    constructor(props) {
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
            projectId: 0,
            showForm: false,
            newEntry: [],
            issuesArr: []
        }
    }

    handleForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    handleChange = e => {
        console.log(e)
        if (this.state.projectView) {
            this.setState({
                newEntry: {
                    ...this.state.newEntry,
                    [e.target.name]: e.target.value
                }
            })
        } else {
            this.setState({
                newEntry: {
                    ...this.state.newEntry,
                    [e.target.name]: e.target.value
                }
            })
        }
    }

    addEntry = e => {
        e.preventDefault()

        if (this.state.projectView) {
            this.state.newEntry.bugs = []

            this.setState({
                projectArr: [
                    ...this.state.projectArr,
                    this.state.newEntry
                ],
            })
        } else {
            this.state.newEntry.projectId = this.state.projectId

            this.setState({
                issuesArr: [
                    ...this.state.issuesArr,
                    this.state.newEntry
                ]
            })
        }
        this.handleForm()
    }

    handleView = () => {
        this.setState({ projectView: !this.state.projectView })

        this.setState({
            projectArr: update(this.state.projectArr, {
                [this.state.projectId]: {
                    bugs: {
                        $push: [this.state.newEntry]
                    }
                }
            })
        })
        
        this.setState({ issuesArr: [] })
        this.setState({ newEntry: [] })
    }

    setIssues = (data, projId) => {
        this.setState({ projectView: !this.state.projectView })
        this.setState({ issuesArr: data })

        this.setProjectId(projId)
    }

    setProjectId = (id) => {
        this.setState({ projectId: id })
    }

    displayProjectsOrIssues = () => {
        if (this.state.projectView) {
            return this.state.projectArr
        } else {
            return this.state.issuesArr
        }
    }

    render() {
        let display = this.displayProjectsOrIssues()

        return (
            <div>
                <h1>I'm an awesome Home view page</h1>
                {
                    (display || []).map((item, i) => {
                        return (
                            this.state.projectView ?
                                <Projects data={item} onProjectClick={this.setIssues} key={i} origin={i} />
                                : <Issues data={item} key={i} />
                        )
                    })
                }
                <button onClick={this.handleForm}>NEW</button>
                {
                    this.state.showForm &&
                    <form onSubmit={this.addEntry}>
                        <div>
                            <label htmlFor="">Name:</label>
                            <input type="text" name="name" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="">Description:</label>
                            <input type="text" name="description" onChange={this.handleChange} />
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
            </div>
        )
    }
}