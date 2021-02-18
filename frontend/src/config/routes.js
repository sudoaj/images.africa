import React from 'react'
import Router from 'react-router-dom/Router'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import createHistory from 'history/createBrowserHistory'
import {ThemeProvider} from 'styled-components'

import {theme} from "../static/colors";

// import Landing from "../components/Landing"
import NotFound from "../components/NotFound"
import Landing from "../views/Landing"
// import CashHome from '../views/cash-home'
// import NotFound from '../components/Core/NotFound'


const history = createHistory()
export default store => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
