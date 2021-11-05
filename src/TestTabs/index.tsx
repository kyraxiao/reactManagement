import { ReactElement } from "react";
import { } from 'antd';
import ETabs from '../common/ETabs'
import EtabPans from '../common/EtabPans'

const Test:React.FC=():ReactElement=>{
    const activeName='直播'
    return(
        <div>
            <ETabs activeName={activeName}>
                <EtabPans label={'直播'} name={'直播'}>
                  <div>直播</div>
                </EtabPans>
                <EtabPans label={'番外'} name={'番外'}>
                  <div>番外</div>
                </EtabPans>
                <EtabPans label={'社区'} name={'社区'}>
                  <div>社区</div>
                </EtabPans>
            </ETabs>
           
        </div>
    )
}
export default Test