import React from 'react'
import { render } from 'react-dom'
import css from './styles/style.styl'
import Main from './components/Main'
import PhotoGrid from './components/PhotoGrid'
import Single from './components/Single'
import { Router, Route, browserHistory, IndexRoute, } from 'react-router'
import { Provider } from 'redux';
import store, { history } from './store'
const router =  (
  <Provider store={store} >
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PhotoGrid} />
      <Route path='/view/:postid' component={Single} />
    </Route>
  </Router>
</Provider>
)


render(router,document.getElementById('root'))
