import React from 'react'
import Router from 'react-router-dom/Router'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import createHistory from 'history/createBrowserHistory'
import {ThemeProvider} from 'styled-components'

import {theme} from "../static/colors";
import NotFound from "../components/NotFound"
import Landing from "../views/Landing"



const history = createHistory()
export default store => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing}/>
          {/* <Route exact path="Homepage" component={Homepage}/> */}
          {/* <Route exact path="Login" component={Login}/> */}
          {/* <Route exact path="Signup" component={Signup}/> */}
          {/* <Route exact path="Profile" component={Profile}/> */}
          {/* <Route exact path="Homepage" component={Homepage}/> */}
          {/* <Route exact path="Photos" component={PhotosPage}/> */}
          {/* <Route exact path="Audio" component={AudioPage}/> */}
          {/* <Route exact path="Videos" component={VideosPage}/> */}
          {/* <Route exact path="PhotoDetails" component={PhotoDetails}/> */}
          {/* <Route exact path="AudioDetails" component={AudioDetails}/> */}
          {/* <Route exact path="VideoDetails" component={VideoDetails}/> */}


          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
