import { ReactElement, useState } from "react";
import { Tabs } from 'antd';
import PlantForms from'./components/PlantForms'
import Application from'./components/Application'
import Auditor from'./components/Auditors'
const { TabPane } = Tabs;
const PlantForm:React.FC=():ReactElement=>{
    const [activeName,setActiveName]=useState('1')
    return(
        <div>
            <Tabs activeKey={activeName} onChange={(key)=>{setActiveName(key)}}>
                <TabPane tab="PlantFormAdmin" key="1">
                    <PlantForms></PlantForms>
                </TabPane>
                <TabPane tab="Application" key="2">
                    <Application></Application>
                </TabPane>
                <TabPane tab="Auditor" key="3">
                    <Auditor></Auditor>
                </TabPane>
            </Tabs>
        </div>
    )
}
export default PlantForm

