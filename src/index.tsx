import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import Menu from './components/Menu'
import Movimentation from './components/Movimentation'

const Root: React.FC = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path={'/'} component={Menu} />
      <Route
        path={'/movimentation'}
        component={Movimentation}
      />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))
