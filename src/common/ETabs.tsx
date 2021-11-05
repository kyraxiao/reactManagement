import { ReactElement, useEffect, useState} from "react";
import{elTabProps} from '../typeings/index'
import './eltabStyle.scss'

interface navListType {
    label: String;
    name:String;
  }

const ETabs:React.FC<elTabProps>=(props):ReactElement=>{
    const [navList,setNavList]=useState<navListType[]>([])
    const [activeName,setActiveName]=useState<string>(props.activeName)
    useEffect(()=>{
        console.log(props)
        let arr:navListType[]=props.children.map((i:any)=>{
            return i.props
        })
        setNavList(arr)
    },[props])
    const tabClassName=(value:any):string=>{
        if(activeName===value.props.name){
            return 'showC'
        }else{
            return 'noshow'
        }
    }
    const changeTab=(val:string):void=>{
        setActiveName(val)
    }
    return(
        <div className="tab">
            <div className='tab-bar'>
                {navList.map((i:any)=>{
                    return(
                        <div className={activeName===i.name?'tab-bar-text-active':'tab-bar-text'} onClick={() => changeTab(i.name)} key={i.name}>{i.label}</div>
                    )
                })}
            </div>
            <div className="tab-content">
                {props.children.map((i:any,index:number)=>{
                    return (
                        <div key={index} className={tabClassName(i)}>{i}</div>
                    )
                })}
            </div>
        </div>
    )

}
export default ETabs