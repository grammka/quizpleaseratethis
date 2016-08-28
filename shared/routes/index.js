import React from 'react'
import { Route } from 'react-router'

import Login from 'containers/Login'
import Admin from 'containers/Admin'
import Home from 'containers/Home'
import CreateGame from 'containers/CreateGame'
import EditGame from 'containers/EditGame'
import TeamsRating from 'containers/TeamsRating'


export default (
  <Route>
    <Route path="/" component={ Home } />
    <Route path="/login" component={ Login } />
    <Route path="/admin" component={ Admin } />
    <Route path="/games/create" component={ CreateGame } />
    <Route path="/games/:gameId/edit" component={ EditGame } />
    <Route path="/teams-rating" component={ TeamsRating } />
  </Route>
)
