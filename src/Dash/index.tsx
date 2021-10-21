import React,{ReactElement, useEffect} from'react'
import {Table,Button} from 'antd';
import './style.scss'
import { ColumnsType } from 'antd/es/table';
import * as echarts from 'echarts/core';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption
} from 'echarts/charts';
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LineChart
]);

const option: ECOption = {
    title: {
        text: 'ECharts Getting Started Example'
      },
      tooltip: {},
      legend: {
        data: ['sales']
      },
      xAxis: {
        data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
};
interface clounType {
    key: String;
    type:String;
    numbers:number;
    creationTime:String;
    creator:String;
}

const Dash:React.FC=():ReactElement=>{
    const columns:ColumnsType<clounType>=[
        {
            title: 'type',
            dataIndex: 'type',
            key: 'type',
            render: text => <Button type="text" className="textBotton" onClick={()=>{
            }}>{text}</Button>,
          },
          {
            title: 'numbers',
            dataIndex: 'numbers',
            key: 'numbers',
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
                }}>Delete</Button>
              </>
            ),
          },
    ]
    const data=[
        {
            key: '1',
            type:'Shirts',
            numbers:5,
            creationTime:'2021-06-15',
            creator:'admin',
          },
          {
            key: '2',
            type:'Cardigans',
            numbers:20,
            creationTime:'2021-06-15',
            creator:'admin',
          },
          {
            key: '3',
            type:'Chiffons',
            numbers:36,
            creationTime:'2021-06-15',
            creator:'admin',
          },
          {
            key: '4',
            type:'Pants',
            numbers:10,
            creationTime:'2021-06-15',
            creator:'admin',
          },
          {
            key: '5',
            type:'Heels',
            numbers:10,
            creationTime:'2021-06-15',
            creator:'admin',
          },
          {
            key: '6',
            type:'Socks',
            numbers:20,
            creationTime:'2021-06-15',
            creator:'admin',
          },{
            key: '7',
            type:'Heels',
            numbers:10,
            creationTime:'2021-06-15',
            creator:'admin',
          },
          {
            key: '8',
            type:'Socks',
            numbers:20,
            creationTime:'2021-06-15',
            creator:'admin',
          },
    ]
    useEffect(()=>{
        var chartDom=document.getElementById('main')as HTMLElement
        var myChart = echarts.init(chartDom);
        myChart.setOption(option)
    })
    return (
        <div>
           <div id="main" style={{width:"100%",height:"600px"}}></div>
           <Table columns={columns} dataSource={data} />
        </div>
    )
}
export default  Dash

