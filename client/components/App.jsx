import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import { HomeView } from './HomeView'


const App = () => {
  return (<>
    <Router>
      <Route path='/' />
      <Route path='/project' component={HomeView}/>
    </Router>
  </>)
}

export default App

//partaisi pec where the goods at principa
//saliec routes un nojauc tieso komponensu renderingu
//partaisis uz redux, piesledz backendu ar db
