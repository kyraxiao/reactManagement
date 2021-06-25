import { ReactElement,useState } from "react";
import { Table,Button,Tabs} from 'antd';
import { ColumnsType } from 'antd/es/table';
const { TabPane } = Tabs;
interface clounType {
    key: String;
    requestType:String;
    description:String;
    creationTime:String;
    creator:String;
}
const RequestHistorys:React.FC=():ReactElement=>{
    const columns:ColumnsType<clounType> = [
        {
          title: 'RequestType',
          dataIndex: 'requestType',
          key: 'requestType',
          render: text => <a>{text}</a>,
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
              <Button type="link" onClick={()=>{
                  console.log(text)
              }}>Delete</Button>
            </>
          ),
        },
      ];
      
      const data = [
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
      ];
      const [activeName,setActiveName]=useState('1')
    return(
        <Tabs activeKey={activeName} onChange={(key)=>{setActiveName(key)}}>
            <TabPane tab="Active" key="1">
                <Table columns={columns} dataSource={data} />
            </TabPane>
            <TabPane tab="Inactive" key="2">
                <Table columns={columns} dataSource={data} />
            </TabPane>
        </Tabs>
    )
}
export default RequestHistorys