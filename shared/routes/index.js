import React from 'react'
import { Route } from 'react-router'

import Home from 'containers/Home'
import TeamsRating from 'containers/TeamsRating'


export default (
  <Route>
    <Route path="/" component={ Home } />
    <Route path="/teams-rating" component={ TeamsRating } />
  </Route>
)
