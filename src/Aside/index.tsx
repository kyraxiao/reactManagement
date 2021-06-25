import React,{ReactElement} from'react'
import { Menu} from 'antd';
import './style.scss'
import { useHistory } from 'react-router';
const { SubMenu } = Menu;

const Aside:React.FC=():ReactElement=>{
    const history=useHistory()
    return(
        <div style={{
            width: 256
        }}>
        <Menu
        mode="inline"
        theme="dark"
        style={{height:'100%'}}
        >
        <Menu.Item key="1" onClick={()=>{
            history.push('/Homes/PlantForm')
        }}>
            PlantForm
        </Menu.Item>
        <SubMenu key="sub1" title="RequestProcess">
            <Menu.Item key="sub1 1"  onClick={()=>{
                history.push('/Homes/RequestType')
            }}>
                RequestType
            </Menu.Item>
            <Menu.Item key="sub1 2"  onClick={()=>{
                history.push('/Homes/RequestHistory')
            }}>
               RequestHistory 
            </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="PrivilegeConfiguration">
            <Menu.Item key="sub2 1"  onClick={()=>{
                history.push('/Homes/UserConfiguration')
            }}>
              UserConfiguration  
            </Menu.Item>
            <Menu.Item key="sub2 2"  onClick={()=>{
                history.push('/Homes/ApplicationConfiguration')
            }}>
                ApplicationConfiguration
            </Menu.Item>
        </SubMenu>
        <Menu.Item key="3" onClick={()=>{
            history.push('/Homes/Dash')
        }}>
            Dash
        </Menu.Item>
        <Menu.Item key="4" onClick={()=>{
            history.push('/Homes/Log')
        }}>
            Log
        </Menu.Item>
        </Menu>
    </div>
    )
}
export default Aside