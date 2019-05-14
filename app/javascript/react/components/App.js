import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import OutfitsShowContainer from '../containers/OutfitsShowContainer'
import UsersShowContainer from '../containers/UsersShowContainer'

const App = props => {
  return (
<Router history={browserHistory}>
  <Route path='/outfits/:id' component={OutfitsShowContainer} />
  <Route path='/users/:id' component={UsersShowContainer} />
</Router>

      )

  }

export default App
