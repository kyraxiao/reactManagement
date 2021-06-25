import {Route} from "react-router-dom";
import {RouteType} from './baseRoutes'
export  function RouteWithSubRoutes(route:RouteType) {
    // const userinfo=sessionStorage.getItem('userinfo')
    return (
        <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.children} />
        )}
        />
    );
}