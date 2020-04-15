const initialState = { projects: null}

export default function projects(state = initialState, action){
    switch(action.type){
        case 'RECEIVE_ALL_PROJECTS':
            return {
                projects: action.data
            }
        case 'ADD_NEW_PROJECT':
            return state
        default:
            return state
    }
}
