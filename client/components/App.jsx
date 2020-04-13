import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


import Nav from './Nav'
import Login from './Login'
import Profile from './Profile'
import Controls from './Controls'
import Display from './Display'
import CurrentPath from './CurrentPath'




const App = () => {
  return (<>
    <Router>
      <div id='header'>
        <Route path='/' component={Nav}/>
        {
          Math.random() > 0.5 ?
          <Route path='/' component={Login}/>
          :
          <Route path='/' component={Profile}/>
        }
      </div>

      <Route path='/' component={Controls} />
      <Route exact path='/' component={Display} />

    </Router>
  </>)
}

export default App

//partaisi pec where the goods at principa
//saliec routes un nojauc tieso komponensu renderingu
//partaisis uz redux, piesledz backendu ar db
