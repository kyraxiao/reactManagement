import React,{ReactElement} from'react'
import './style.scss'
import Aside from '../Aside/index'
import { Layout} from 'antd';
import Headers from '../Headers/index'
import {Switch,Route} from "react-router-dom";
import {RouteWithSubRoutes} from '../routes/renderRoute'
import {RouteType} from '../routes/baseRoutes'
import Dash from '../Dash/index'
const { Header, Content } = Layout;
type AppProps = {
    routes:RouteType[]
}
const Homes:React.FC<AppProps>=(props):ReactElement=>{
    const routes=props.routes
    return(
        <div className="contair">
            <Layout style={{height:'100%'}}>
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <Headers></Headers>
                </Header>
                <div className="section">
                    <Aside></Aside>
                    <Content
                        className="site-layout-background"
                    >
                        <Switch>
                            <Route path="/Homes/Dash" component={Dash}></Route>
                            {
                                routes.map((i,index)=>(
                                    <RouteWithSubRoutes key={index} {...i}></RouteWithSubRoutes>
                                ))
                            }
                        </Switch>
                    </Content>
                </div>
            </Layout>
        </div>
    )
}
export default Homes