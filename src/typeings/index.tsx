import {RefObject} from 'react'
export  interface IProps {
    vis:boolean,
    colseDrawer:()=>void,
    save:()=>any,
}

export  interface clounType {
    key: String;
    requestType:String;
    description:String;
    creationTime:String;
    creator:String;
}

interface TdF{
    name:string,
    rules:{required:boolean,message:string}[],
    inptOrNo:string,
    selectList?:string[]
}
export  interface IPropsForm {
    forwardedRef?: RefObject<HTMLElement>
    formList:TdF[],
}