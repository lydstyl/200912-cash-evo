import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Home } from './components/Home/Home'
import { EditAccount } from './components/EditAccount/EditAccount'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Courbes globale et comparative</Link>
            </li>

            <li>
              <Link to='/users'>login</Link>
            </li>

            <li>
              <Link to='/users'>Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <About />
          </Route>

          <Route path='/users'>
            <Users />
          </Route>

          <Route path='/edit-account/:accountId'>
            <EditAccount />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}
