import {lazy} from 'react';
const Login=lazy(()=>import('../Login'))
const Homes=lazy(()=>import('../Homes/index'))
const NotFounds=lazy(()=>import('../NotFound/index'))
const Dash=lazy(()=>import('../Dash/index'))
const PlantForm=lazy(()=>import('../PlantForm/index'))
const RequestType=lazy(()=>import('../RequestProcess/RequestType'))
const RequestHistory=lazy(()=>import('../RequestProcess/RequestHistory'))
const UserConfiguration=lazy(()=>import('../PrivilegeConfiguration/UserConfiguration'))
const ApplicationConfiguration=lazy(()=>import('../PrivilegeConfiguration/ApplicationConfiguration'))
const Log=lazy(()=>import('../Log/index'))
const TestTab=lazy(()=>import('../TestTabs/index'))
export interface RouteType{
    path:string,
    exact?:boolean,
    component:React.ComponentType<any>,
    children?:RouteType[]
}
export const routes:RouteType[]=[
    {
        path:'/',
        exact:true,
        component:Login,
    },{
        path:'/Homes',
        component:Homes,
        children: [
            {
              path: "/Homes/Dash",
              component:Dash
            },{
                path: "/Homes/PlantForm",
                component:PlantForm
            },{
                path: "/Homes/RequestType",
                component:RequestType
            },{
                path: "/Homes/RequestHistory",
                component:RequestHistory
            },{
                path: "/Homes/UserConfiguration",
                component:UserConfiguration
            },{
                path: "/Homes/ApplicationConfiguration",
                component:ApplicationConfiguration
            },{
                path: "/Homes/Log",
                component:Log
            },{
                path: "/Homes/TestTab",
                component:TestTab
            }
          ]
    },{
        path:'*',
        component:NotFounds
    }
]

