import { ReactElement } from "react";
import { Table,Button,Switch  } from 'antd';
import { ColumnsType } from 'antd/es/table';
interface clounType {
    key: String;
    name:String;
    shortname:String;
    email:String;
    app:String;
    status:Boolean;
}
const Application:React.FC=():ReactElement=>{
    const columns:ColumnsType<clounType> = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <Button type="text" className="textBotton" onClick={()=>{
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
              }}>Delete</Button>
            </>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          shortname:'John',
          email:'John@qq.com',
          app:'test1',
          status:true
        },
        {
          key: '2',
          name: 'Jim Green',
          shortname:'Jim',
          email:'Jim@qq.com',
          app:'test3',
          status:true
        },
        {
          key: '3',
          name: 'Joe Black',
          shortname:'Joe',
          email:'Joe@qq.com',
          app:'test2',
          status:false
        },
      ];
    return(
        <div>
           <Table columns={columns} dataSource={data} />
        </div>
    )
}
export default Application