import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


import Nav from './Nav'
import Login from './Login'
import Profile from './Profile'
import Controls from './Controls'
import Display from './Display'
import Form from './Form'
import { connect } from 'react-redux'

import { getForm } from '../actions/forms'


class App extends React.Component{


  render(){    
    const data = this.props.forms || false
    return (
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
        {
          data.form == 'add' &&
          <Route path='/' component={Form} />
        }
        <Route exact path='/' component={Display} />
  
      </Router>
    )
  }
}


const mapStateToProps = ({ forms }) => {
  return {
    forms
  }
}
export default connect(mapStateToProps, { getForm })(App)

//partaisi pec where the goods at principa
//saliec routes un nojauc tieso komponensu renderingu
//partaisis uz redux, piesledz backendu ar db
