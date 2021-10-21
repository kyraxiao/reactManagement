import React,{ReactElement} from'react'
import './style.scss'
import Aside from '../Aside/index'
import Headers from '../Headers/index'
import {Switch,Route} from "react-router-dom";
import {RouteWithSubRoutes} from '../routes/renderRoute'
import {RouteType} from '../routes/baseRoutes'
import Dash from '../Dash/index'
type AppProps = {
    routes:RouteType[]
}
const Homes:React.FC<AppProps>=(props):ReactElement=>{
    const routes=props.routes
    return(
        <div className="contair">
            <div className="hese">
                <Headers></Headers>
            </div>
            <div className="section">
                <div className="LeftAsides"> <Aside></Aside></div>
                <div className="site-layout-background">
                    <Switch>
                        <Route path="/Homes/Dash" component={Dash}></Route>
                        {
                            routes.map((i,index)=>(
                                <RouteWithSubRoutes key={index} {...i}></RouteWithSubRoutes>
                            ))
                        }
                    </Switch>
                </div>
            </div>
        </div>
    )
}
export default Homes