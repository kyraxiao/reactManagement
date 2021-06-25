import React,{ReactElement} from'react'
import {Avatar,Dropdown,Menu,Button} from 'antd';
import './style.scss'
import { useHistory } from 'react-router';
const Headers:React.FC=():ReactElement=>{
    const history=useHistory()
    const menu=(
        <Menu>
            <Menu.Item key="0" disabled>
                <Button disabled type="text">peter</Button>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <Button type="text" onClick={()=>{
                    history.push('/')
                }}>Login out</Button>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">
            <Button type="text" onClick={()=>{
                   
                }}>Person</Button>
            </Menu.Item>
        </Menu>
    )
    return (
        <div className="headerBox">
            <Dropdown overlay={menu}>
                <div className="buttonSty">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </div>
            </Dropdown>
        </div>
    )
}
export default  Headers