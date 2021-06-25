import './App.sass';
// import {Suspense} from'react'
import { BrowserRouter, Switch,Route} from "react-router-dom";
// import {RouteWithSubRoutes} from './renderRoute'
// import baseRoutes from './baseRoutes'
import Login from '../Login/index'
import Homes from '../Homes/index'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/Homes' component={Homes} />
      </Switch>
     
  </BrowserRouter>
)
}

export default App;
