import { ReactElement,useRef,useState } from "react";
import { Table,Button} from 'antd';
import { ColumnsType } from 'antd/es/table';
import DrawerCommon from '../common/DrawerCommon';
import TdForms from '../common/TdForm';
interface clounType {
    key: String;
    requestType:String;
    description:String;
    creationTime:String;
    creator:String;
}
const RequestTypes:React.FC=():ReactElement=>{
    const columns:ColumnsType<clounType> = [
        {
          title: 'RequestType',
          dataIndex: 'requestType',
          key: 'requestType',
          render: text =>  <Button type="text" className="textBotton" onClick={()=>{
            }}>{text}</Button>,
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Creation Time',
          dataIndex: 'creationTime',
          key: 'creationTime',
        },
        {
          title: 'Creator',
          key: 'creator',
          dataIndex: 'creator',
        },
        {
          title: 'Operation',
          key: 'Operation',

          render: (text) => (
            <>
              <Button type="text" className="textBotton" onClick={()=>{
                  console.log(text)
              }}>Set Up</Button>
              <Button type="text" className="textBotton" onClick={()=>{
                  console.log(text)
              }}>Delete</Button>
            </>
          ),
        },
      ];
      const [data,setData]=useState<clounType[]>([
        {
          key: '1',
          requestType:'role',
          description:'role',
          creationTime:'2021-06-15',
          creator:'admin',
        },
        {
          key: '2',
          requestType:'application',
          description:'application',
          creationTime:'2021-06-15',
          creator:'admin',
        },
        {
          key: '3',
          requestType:'data permisson',
          description:'data',
          creationTime:'2021-06-15',
          creator:'admin',
        },
      ])
      const [vis,setVis]=useState<boolean>(false)
      const formList=[
        {
          name:'agentName',
          rules:[{ required: true, message: 'Please Enter agentName!'}],
          inptOrNo:'input'
        },{
          name:'view',
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
export default RequestTypes