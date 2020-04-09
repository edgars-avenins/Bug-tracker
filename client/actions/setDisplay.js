import { getProjectIssues } from '../apis/issues'

export function setDisplay(view, parentID){
    return (dispatch) => {
        getProjectIssues(parentID)
            .then(data => {
                dispatch({
                    type: 'RECEIVE_PROJECT_ISSUES',
                    data
                })
                dispatch({
                    type: 'SET_NEXT_VIEW',
                    data: view
                })
            })
    }
}