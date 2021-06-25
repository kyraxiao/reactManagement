import {Suspense} from'react'
import { BrowserRouter, Switch} from "react-router-dom";
import {RouteWithSubRoutes} from './renderRoute'
import {routes} from './baseRoutes'
const AuthRoute=()=>{
    console.log( routes.map((item,index)=>(
        <RouteWithSubRoutes key={index} {...item}></RouteWithSubRoutes>
  )))
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                {
                  <Switch>
                      {
                        routes.map((item,index)=>(
                              <RouteWithSubRoutes key={index} {...item}></RouteWithSubRoutes>
                        ))
                      }
                  </Switch>  
                }
            </Suspense>
           
        </BrowserRouter>
    )
}

export default AuthRoute

