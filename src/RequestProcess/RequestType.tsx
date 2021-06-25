import { ReactElement } from "react";
import { Table,Button} from 'antd';
import { ColumnsType } from 'antd/es/table';
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
              }}>Set Up</Button>
              <Button type="link"  onClick={()=>{
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
    return(
        <div>
           <Table columns={columns} dataSource={data} />
        </div>
    )
}
export default RequestTypes