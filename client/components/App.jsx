import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'


import Nav from './Nav'
import Access from './Access'
import Controls from './Controls'
import Display from './Display'
import Form from './Form'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'



class App extends React.Component{


  render(){    
    const data = this.props.forms || false
    const auth = this.props.auth.isAuthenticated || false
    return (
      <Router>
        <div id='header'>
          <Route path='/' component={Nav}/>
          <Route path='/' component={()=> <Access auth={auth}/>}/>
        </div>

        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/user' component={Profile} />

        <Route exact path='/' component={Controls} />
        {
          data.form == 'add' &&
          <Route path='/' component={Form} />
        }
        <Route exact path='/' component={Display} />
  
      </Router>
    )
  }
}


const mapStateToProps = ({ forms, auth }) => {
  return {
    forms,
    auth
  }
}
export default connect(mapStateToProps, { })(App)

//partaisi pec where the goods at principa
//saliec routes un nojauc tieso komponensu renderingu
//partaisis uz redux, piesledz backendu ar db
