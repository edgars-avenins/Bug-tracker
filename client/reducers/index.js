import { combineReducers } from 'redux'

import projects from './projects'
import issues from './issues'
import view from './setDisplay'


export default combineReducers({
    projects,
    issues,
    view
})