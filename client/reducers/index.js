import { combineReducers } from 'redux'

import projects from './projects'
import issues from './issues'
import view from './setDisplay'
import details from './details'
import forms from './forms'
import auth from './auth'


export default combineReducers({
    projects,
    issues,
    view,
    details,
    forms,
    auth
})