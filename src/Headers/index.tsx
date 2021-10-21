import React,{ReactElement} from'react'
import {Avatar,Dropdown,Menu,Button,Image} from 'antd';
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
        <div>
            <div className="imgBox">
                <Image style={{width:'40px',height:'40px',marginTop:'10px'}} preview={false} src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.solosea.com%2Fres%2Fupload%2Ffpdown%2Fimg%2F638c5a6143ec585c9bc6cbc612176a7d.jpg&refer=http%3A%2F%2Fwww.solosea.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637397242&t=b1000ed5ce4228869e7fbee27938f3dd'></Image>
            </div> 
            <div className="titleBox"> 
                Test
            </div>
            
            <div className="headerBox">
                <Dropdown overlay={menu}>
                    <div className="buttonSty">
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </div>
                </Dropdown>
            </div>
        </div>
        
    )
}
export default  Headers