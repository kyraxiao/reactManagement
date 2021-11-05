import { ReactElement, useEffect,useRef,useState } from "react";
import { Row,Col,Card,Tabs,Progress,Table,Button,Switch} from 'antd';
import EchartComm from '../common/EchartComms'
import './style.scss'
import { ColumnsType } from 'antd/es/table';
import * as echarts from 'echarts/core';
import {
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
} from 'echarts/charts';
import {
  TitleComponentOption,
  GridComponentOption,
  // 数据集组件
  DatasetComponentOption,
} from 'echarts/components';
// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型

type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | PieSeriesOption
>;
const { TabPane } = Tabs;
var option:ECOption={
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [7, 2, 7, 5, 9, 1, 5,3,6,5],
      type: 'line',
      smooth: true
    }
  ]
}
var option1:ECOption={
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [5, 1, 4, 3, 6, 0, 3,3,6,5],
      type: 'bar'
    }
  ]
}
var option2:ECOption={
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [522, 1333, 444, 3556, 622, 5620, 345,315,658,578],
      type: 'bar'
    }
  ]
}
var option3:ECOption={
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [5344, 1555, 4667, 3345, 632, 444, 355,3666,633,5444],
      type: 'bar'
    }
  ]
}
var option4:ECOption={
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: '2%'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'left'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
}
var option5:ECOption={
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [5344, 1555, 4667, 3345, 632, 444, 355,3666,633,5444],
      type: 'line'
    }
  ]
}
var option6:ECOption={
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [5344, 1555, 4667, 3345, 632, 444, 355,3666,633,5444],
      type: 'line'
    }
  ]
}
interface clounType {
  key: String;
  name:String;
  shortname:String;
  email:String;
  app:String;
  status:string;
}


const Log:React.FC=():ReactElement=>{
  const columns:ColumnsType<clounType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text,record) => <Button type="text" className="textBotton" onClick={()=>{
        // setVis(true)
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
  
  const getForm=useRef<HTMLElement>(null)
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
    useEffect(()=>{
     
    })
    return(
        <div>
           <Row gutter={24} >
              <Col span={6}>
                <Card
                  style={{ width:'100%' }}
                  actions={[<div>日销售额￥12,423</div>]}
                >
                  <div className="flexs">
                    <div>总销售额</div>
                    <div><i className="iconfont icon-gantanhaozhong"></i></div>
                  </div>
                  <h1>¥ 126,560</h1>
                  <div style={{height:'60px'}}>
                    <span style={{marginRight:'10px'}}>周同比12%<i style={{color:'#ff4d4f'}} className="iconfont icon-sanjiao2"></i></span>
                    <span>日同比12%<i style={{color:'#4dff5b'}} className="iconfont icon-sanjiao1"></i></span>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                    style={{  width:'100%' }}
                    actions={[<div>日访问量1,234</div>]}
                  >
                    <div className="flexs">
                      <div>访问量</div>
                      <div><i className="iconfont icon-gantanhaozhong"></i></div>
                    </div>
                    <div>
                      <h1> 8,846</h1>
                      <EchartComm classNames={'lineOne'} esstyle={{width:'265px',height:'60px'}} options={option}></EchartComm>
                      {/* <div id="lineOne" style={{width:'265px',height:'60px'}}></div> */}
                    </div>
                  </Card>
              </Col>
              <Col span={6}>
                  <Card
                      style={{ width:'100%' }}
                      actions={[<div>转化率60%</div>]}
                    >
                    <div className="flexs">
                      <div>支付笔数</div>
                      <div><i className="iconfont icon-gantanhaozhong"></i></div>
                    </div>
                    <div>
                      <h1> 6560</h1>
                      {/* <div id="barOne" style={{width:'265px',height:'60px'}}></div> */}
                      <EchartComm classNames={'barOne'} esstyle={{width:'265px',height:'60px'}} options={option1}></EchartComm>
                    </div>
                  </Card>
              </Col>
              <Col span={6}>
                  <Card
                      style={{ width:'100%' }}
                      actions={[<div>
                        <span style={{marginRight:'10px'}}>周同比12%<i style={{color:'#ff4d4f'}} className="iconfont icon-sanjiao2"></i></span>
                        <span>日同比12%<i style={{color:'#4dff5b'}} className="iconfont icon-sanjiao1"></i></span>
                      </div>]}
                    >
                    <div className="flexs">
                      <div>运营活动效果</div>
                      <div><i className="iconfont icon-gantanhaozhong"></i></div>
                    </div>
                    <div >
                      <h1> 78%</h1>
                      <div style={{height:'60px'}}>
                        <Progress percent={78} />
                      </div>
                    </div>
                  </Card>
              </Col>
            </Row>
            <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  销售额
                </span>
              }
              key="1"
            >
              <div className="flexs">
                <EchartComm classNames={'lineTwo'} esstyle={{width:'1066px',height:'300px'}} options={option2}></EchartComm>
                <div style={{width:'450px'}}>
                  <h4>门店销售额排名</h4>
                  <ul className="ulBox">
                      <li>
                        <span className="spanCRIL">1</span>
                        <span>工专路 0 号店</span>
                        <span>323,234</span>
                      </li>
                      <li>
                        <span className="spanCRIL">2</span>
                        <span>工专路 0 号店</span>
                        <span>323,234</span>
                      </li>
                      <li>
                        <span className="spanCRIL">3</span>
                        <span>工专路 0 号店</span>
                        <span>323,234</span>
                      </li>
                      <li>
                        <span className="spanNo">4</span>
                        <span>工专路 0 号店</span>
                        <span>323,234</span>
                      </li>
                      <li>
                        <span className="spanNo">5</span>
                        <span>工专路 0 号店</span>
                        <span>323,234</span>
                      </li>
                      <li>
                        <span className="spanNo">6</span>
                        <span>工专路 0 号店</span>
                        <span>323,234</span>
                      </li>
                  </ul>
                </div>
              </div>
            </TabPane>
            <TabPane
              tab={
                <span>
                  访问量
                </span>
              }
              key="2"
            >
               <div className="flexs">
               <EchartComm classNames={'lineThree'} esstyle={{width:'1066px',height:'300px'}} options={option3}></EchartComm>
                <div style={{width:'450px'}}>
                  <h4>门店访问量排名</h4>
                  <ul className="ulBox">
                      <li>
                        <span className="spanCRIL">1</span>
                        <span>工专路 0 号店</span>
                        <span>323,234</span>
                      </li>
                      <li>
                        <span className="spanCRIL">2</span>
                        <span>工专路 0 号店</span>
                        <span>323,234</span>
                      </li>
                      <li>
                        <span className="spanCRIL">3</span>
                        <span>工专路 0 号店</span>
                        <span>323,234</span>
                      </li>
                      <li>
                        <span className="spanNo">4</span>
                        <span>工专路 0 号店</span>
                        <span>323,234</span>
                      </li>
                      <li>
                        <span className="spanNo">5</span>
                        <span>工专路 0 号店</span>
                        <span>323,234</span>
                      </li>
                      <li>
                        <span className="spanNo">6</span>
                        <span>工专路 0 号店</span>
                        <span>323,234</span>
                      </li>
                  </ul>
                </div>
              </div>
            </TabPane>
          </Tabs>
          <Row gutter={24}>
              <Col span={12}>
                  <Card title="线上热门搜索">
                    <div className="flexs">
                    <EchartComm classNames={'linefive'} esstyle={{width:'265px',height:'60px'}} options={option5}></EchartComm>
                    <EchartComm classNames={'linesix'} esstyle={{width:'265px',height:'60px'}} options={option6}></EchartComm>
                    </div>
                    <Table columns={columns} dataSource={data} />
                  </Card>
              </Col>
              <Col span={12}>
                <Card title="销售额类别占比">
                    <EchartComm classNames={'pieone'} esstyle={{width:'1066px',height:'374px'}} options={option4}></EchartComm>
                  </Card>
              </Col>
          </Row>

          
        </div>
    )
}
export default Log