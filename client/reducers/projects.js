const initialState = { projects: null, chosenProject: null}

export default function projects(state = initialState, action){
    switch(action.type){
        case 'RECEIVE_ALL_PROJECTS':
            return {
                projects: action.data
            }
        case 'ADD_NEW_PROJECT':
            return state
        case 'CHOOSE_PROJECT':
            return {
                chosenProject: state.projects.find(item => item.id == action.data),
                projects: state.projects
            }
        default:
            return state
    }
}
