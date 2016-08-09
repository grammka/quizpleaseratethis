import React from 'react'
import { Route } from 'react-router'

import Admin from 'containers/Admin'
import Home from 'containers/Home'
import CreateGame from 'containers/CreateGame'
import TeamsRating from 'containers/TeamsRating'


export default (
  <Route>
    <Route path="/" component={ Home } />
    <Route path="/admin" component={ Admin } />
    <Route path="/create-game" component={ CreateGame } />
    <Route path="/teams-rating" component={ TeamsRating } />
  </Route>
)
