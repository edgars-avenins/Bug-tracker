import { getProjectIssues } from '../apis/issues'
import { getIssueDetails } from '../apis/details'

export function setDisplay(view, parentID) {
    return (dispatch) => {
        dispatch({
            type: 'SET_NEXT_VIEW',
            data: view
        })
    }
}

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

export function getDetails(id) {
    return (dispatch) => {
        getIssueDetails(id)
            .then(data => {
                dispatch({
                    type: 'RECEIVE_ISSUE_DETAILS',
                    data
                })
            })
    }
}