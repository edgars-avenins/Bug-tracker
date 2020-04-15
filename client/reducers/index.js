import { combineReducers } from 'redux'

import projects from './projects'
import issues from './issues'
import view from './setDisplay'
import details from './details'
import forms from './forms'


export default combineReducers({
    projects,
    issues,
    view,
    details,
    forms
})