const initialState = { view: 'projects'}

export default function view(state = initialState, action){
    switch(action.type){
        case 'SET_NEXT_VIEW':
            return {
                view: action.data
            }
        default:
            return state
    }
}
