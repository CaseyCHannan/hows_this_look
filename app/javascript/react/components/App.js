import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import OutfitsShowContainer from '../containers/OutfitsShowContainer'

const App = props => {
  return (
<Router history={browserHistory}>
  <Route path='/outfits/:id' component={OutfitsShowContainer} />
</Router>

      )

  }

export default App
