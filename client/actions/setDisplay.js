import { getIssueDetails } from '../apis/details'

export function setDisplay(view) {
    return (dispatch) => {
        dispatch({
            type: 'SET_NEXT_VIEW',
            data: view
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