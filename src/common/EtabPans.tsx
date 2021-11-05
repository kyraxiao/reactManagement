import { ReactElement} from "react";
import{elTabPanProps} from '../typeings/index'
const EtabPans:React.FC<elTabPanProps>=(props):ReactElement=>{
    return(
        <div>
            {props.children}
        </div>
    )

}
export default EtabPans