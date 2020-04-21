export function setForm() {
    return (dispatch) => {
        dispatch({
            type: 'SHOW_ADD_FORM',
            data: 'add'
        })
    }
}

export function hideForm(){
    return (dispatch) => {
        dispatch({
            type: 'HIDE_FORM'
        })
    }
}