import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react'
import ServiceList from './components/ServiceList'
import ErrorPage from './components/ErrorPage'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ServiceList} />
          <Route path='/error' component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  )

}

export default App;
