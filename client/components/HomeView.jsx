import React from 'react'
import update from 'react-addons-update'
import { Projects } from './Projects'
import { IssueList } from './IssueList'

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
            issueView: false,
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
            this.clearEntry()
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

    clearEntry = () => {
        this.setState({ newEntry: [] })
    }

    handleView = () => {
        this.setState({ projectView: !this.state.projectView })

        if (this.state.newEntry.length != 0) {
            this.setState({
                projectArr: update(this.state.projectArr, {
                    [this.state.projectId]: {
                        bugs: {
                            $push: [this.state.newEntry]
                        }
                    }
                })
            })
        }

        this.setState({ issuesArr: [] })
        this.setState({ newEntry: [] })
    }

    setIssueList = (data, projId) => {
        this.setState({ projectView: !this.state.projectView })
        this.setState({ issuesArr: data })
        this.setState({ projectId: projId })
    }

    displayView = () => {
        if (this.state.projectView) {
            return this.state.projectArr
        } else {
            return this.state.issuesArr
        }
    }

    render() {
        let display = this.displayView()

        return (
            <div>
                {
                    !this.state.projectView ?
                        <h1>Issue list</h1> :
                        <h1>Project List</h1>
                }
                <ul>
                    {
                        (display || []).map((item, i) => {
                            return (
                                this.state.projectView ?
                                    <li key={i}>
                                        <Projects data={item} onProjectClick={this.setIssueList} origin={i} />
                                    </li>
                                    :
                                    <li key={i}>
                                        <IssueList data={item} onIssueClick={this.setIssue}/>
                                    </li>
                            )
                        })
                    }
                </ul>
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