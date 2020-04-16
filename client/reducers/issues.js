const initialState = { issues: null}

export default function issues(state = initialState, action){
    switch(action.type){
        case 'RECEIVE_PROJECT_ISSUES':
            return {
                issues: action.data
            }
        case 'ADD_ISSUE':
            return state
        default:
            return state
    }
}
