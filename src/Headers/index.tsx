import React,{ReactElement} from'react'
import {Avatar,Dropdown,Menu,Button,Image,Badge} from 'antd';
import './style.scss'
import { useHistory } from 'react-router';
const Headers:React.FC=():ReactElement=>{
    const history=useHistory()
    const menu=(
        <Menu>
            <Menu.Item key="0" >
                <Button  type="text"><i style={{fontSize:'15px',color:'#333',padding:'0px 20px',}} className="iconfont icon-geren"></i>Personal center</Button>
            </Menu.Item>
            <Menu.Divider />
                <Menu.Item key="1">
                    <Button type="text" onClick={()=>{
                        
                        }}><i style={{fontSize:'15px',color:'#333',padding:'0px 20px',}} className="iconfont icon-shezhi"></i>Personal settings</Button>
                </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">
                <Button type="text" onClick={()=>{
                    history.push('/')
                }}><i style={{fontSize:'15px',color:'#333',padding:'0px 20px',}} className="iconfont icon-logout"></i>Login out</Button>
            </Menu.Item>
            
        </Menu>
    )
    return (
        <div>
            <div className="imgBox">
                <Image style={{width:'40px',height:'40px',marginTop:'12px'}} preview={false} src='https://iconfont.alicdn.com/t/c5488202-544c-48f8-9971-31dfe19096af.png'></Image>
            </div> 
            <div className="titleBox"> 
                Bee Platform Management
            </div>
            <div className="headerBox">
                <div style={{width:'60px',lineHeight:'64px',}}>
                    <i style={{fontSize:'25px',color:'#fff',}} className="iconfont icon-bangzhu"></i>
                </div>
                <div style={{width:'60px',lineHeight:'75px',}}>
                    <Badge count={99}>
                        <i style={{fontSize:'25px',color:'#fff',}} className="iconfont icon-tongzhi"></i>
                    </Badge>
                </div>
                <Dropdown overlay={menu}>
                    <div className="buttonSty">
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <span style={{color:'#fff'}}>Serati Xiao</span>
                    </div>
                </Dropdown>
            </div>
        </div>
        
    )
}
export default  Headers