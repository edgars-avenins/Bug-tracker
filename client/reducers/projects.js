const initialState = { projects: null}

export default function projects(state = initialState, action){
    switch(action.type){
        case 'RECEIVE_ALL_PROJECTS':
            return { projects: action.data }
        default:
            return state
    }
}