import {ReactElement, useRef, useState} from "react";
import { Table,Button,Switch} from 'antd';
import { ColumnsType } from 'antd/es/table';
import '../style.scss'
import DrawerCommon from '../../common/DrawerCommon'
import TdForms from '../../common/TdForm'
interface clounType {
    key: String;
    name:String;
    shortname:String;
    email:String;
    status:Boolean;
}
const PlantForms:React.FC=():ReactElement=>{
    const columns:ColumnsType<clounType> = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text,record) => <Button type="text" className="textBotton" onClick={()=>{
            const { form }: any = getForm.current;
            setVis(true)
            form.setFieldsValue(record)
          }}>{text}</Button>,
        },
        {
          title: 'Shortname',
          dataIndex: 'shortname',
          key: 'shortname',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
          render:(tag)=>(
            <Switch defaultChecked={tag}></Switch> 
          )
        },
        {
          title: 'Operation',
          key: 'Operation',

          render: (text) => (
            <>
              <Button type="text" className="textBotton" onClick={()=>{
                  console.log(text)
              }}>Detail</Button>
              <Button type="text" className="textBotton" onClick={()=>{
                let arr=data.filter(item=>{
                  if(JSON.stringify(item)!==JSON.stringify(text)){
                      return item;
                  }else{
                    return false;
                  }
                })
                setData(arr)
              }}>Delete</Button>
            </>
          ),
        },
      ];
      const [data,setData]=useState<clounType[]>([])
      const [vis,setVis]=useState<boolean>(false)
      const formList=[
        {
          name:'name',
          rules:[{ required: true, message: 'Please Enter name!'}],
          inptOrNo:'input'
        },{
          name:'shortname',
          rules:[{ required: true, message: 'Please Enter Shortname!'}],
          inptOrNo:'input'
        },{
          name:'email',
          rules:[{ required: true, message: 'Please Enter Email!'}],
          inptOrNo:'input'
        },{
          name:'status',
          rules:[{ required: true, message: 'Please select Status!'}],
          inptOrNo:'Select',
          selectList:['Active','Inactive']
        }
      ]
      const getForm=useRef<HTMLElement>()
    return(
        <div>
          <div className="serachForm">
            <Button type="primary" onClick={()=>{
              setVis(true)
            }}>+ New PlantForm</Button>
          </div>
          <Table columns={columns} dataSource={data} />
          <DrawerCommon
          vis={vis}
          colseDrawer={()=>{
            const { form }: any = getForm.current;
            form.resetFields()
            setVis(false)
          }}
          save={async()=>{
            let arr=[]
            const { form }: any = getForm.current;
            const value=await form.validateFields()
            arr.push({...value,key:Math.random()*10})
            setData(arr)
            form.resetFields()
            setVis(false)
          }}
          >
              <TdForms
              formList={formList}
              ref={getForm}
              />
          </DrawerCommon>
        </div>
    )
}
export default PlantForms