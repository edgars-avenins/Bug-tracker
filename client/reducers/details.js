const initialState = { details: null}

export default function details(state = initialState, action){
    switch(action.type){
        case 'RECEIVE_ISSUE_DETAILS':
            return {
                details: action.data
            }
        default:
            return state
    }
}
