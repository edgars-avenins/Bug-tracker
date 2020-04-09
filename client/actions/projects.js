import { getAllProjects } from '../apis/projects'

export function getProjects(){
    return (dispatch) => {
        getAllProjects()
            .then(data => {
                dispatch({
                    type: 'RECEIVE_ALL_PROJECTS',
                    data
                })
            })
    }
}