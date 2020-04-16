import { getProjectIssues, addIssue } from '../apis/issues'
import { hideForm } from './forms'


export function getIssues(id) {
    return (dispatch) => {
        getProjectIssues(id)
            .then(data => {
                dispatch({
                    type: 'RECEIVE_PROJECT_ISSUES',
                    data
                })
            })
    }
}

export function addNewIssue(data, id) {
    return (dispatch) => {
        addIssue(data, id)
            .then(data => {
                dispatch({
                    type: 'ADD_ISSUE',
                    data
                })
                dispatch(hideForm())
                dispatch(getIssues(id))
            })
    }
}