import { getAllProjects, addProject } from '../apis/projects'
import { hideForm } from './forms'

export function getProjects(){
    return (dispatch) => {
        getAllProjects()
            .then(data => {
                dispatch({
                    type: 'RECEIVE_ALL_PROJECTS',
                    data
                })
            })
    }
}

export function addNewProject(data){
    return (dispatch) => {
        addProject(data)
        .then(() => {
                dispatch({
                    type: 'ADD_NEW_PROJECT'
                })
                dispatch(hideForm())
                dispatch(getProjects())
            })
    }
}