import {Drawer,Button} from 'antd';
import { ReactElement,} from "react";
import {IProps} from '../typeings/index'
const DrawerCommon:React.FC<IProps>=(props):ReactElement=>{
    // const inputRef=useRef<HTMLInputElement>(null)
    return(
        <Drawer
          title="Basic Drawer"
          placement="right"
          width={720}
          closable={false}
          onClose={props.colseDrawer}
          visible={props.vis}
          getContainer={false}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={props.colseDrawer} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={props.save} type="primary">
                Submit
              </Button>
            </div>
          }
        >
            {props.children}
        </Drawer>
    )
}
export default DrawerCommon