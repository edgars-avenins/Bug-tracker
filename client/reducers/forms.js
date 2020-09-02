const initialState = { form: null}

export default function forms(state = initialState, action){
    switch(action.type){
        case 'SHOW_ADD_FORM':
            return {
                form: action.data
            }
        case 'GET_ADD_FORM':
            return state
        case 'HIDE_FORM':
            return {
                form: null
            }
        default:
            return state
    }
}
