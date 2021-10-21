import { ReactElement, useState,useRef } from "react";
import { Table,Button,Switch  } from 'antd';
import { ColumnsType } from 'antd/es/table';
import DrawerCommon from '../../common/DrawerCommon'
import TdForms from '../../common/TdForm'
interface clounType {
    key: String;
    name:String;
    shortname:String;
    email:String;
    app:String;
    status:string;
}
const Application:React.FC=():ReactElement=>{
    const columns:ColumnsType<clounType> = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text,record) => <Button type="text" className="textBotton" onClick={()=>{
            setVis(true)
            const { form }: any = getForm.current;
            console.log(record)
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
          title: 'App',
          dataIndex: 'app',
          key: 'app',
        },
        {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
          render:(tag,record)=>(
            <Switch defaultChecked={tag==='Active'?true:false} onChange={(checked)=>{
              let arr=data.map(i=>{
                if(i.key===record.key){
                  checked?i.status='Active':i.status='Inactive'
                }
                return i
              })
              setData(arr)
            }}></Switch> 
          )
        },
        {
          title: 'Operation',
          key: 'Operation',

          render: (text,record) => (
            <>
              <Button type="text" className="textBotton" onClick={()=>{
                 let arr= data.filter(i=>{
                    if(i.key!==record.key){
                      return i
                    }else{
                      return false
                    }
                  })
                  setData(arr)
              }}>Delete</Button>
            </>
          ),
        },
      ];
      const [data,setData]=useState<clounType[]>([{
        key: '1',
        name: 'John Brown',
        shortname:'John',
        email:'John@qq.com',
        app:'test1',
        status:'Active',
      },
      {
        key: '2',
        name: 'Jim Green',
        shortname:'Jim',
        email:'Jim@qq.com',
        app:'test3',
        status:'Active',
      },
      {
        key: '3',
        name: 'Joe Black',
        shortname:'Joe',
        email:'Joe@qq.com',
        app:'test2',
        status:'Inactive'
      },])

      const [vis,setVis]=useState<boolean>(false)
      const getForm=useRef<HTMLElement>()
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
    return(
        <div>
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
export default Application