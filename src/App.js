import React from 'react'
import { Router, Switch, Route } from 'react-router'
import { createBrowserHistory } from 'history'

import './App.css'
import Home from './components/Home'
import NotFound from './components/NotFound'

const history = createBrowserHistory()

const App = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/*" component={NotFound} />
        </Switch>
    </Router>
)

export default App
