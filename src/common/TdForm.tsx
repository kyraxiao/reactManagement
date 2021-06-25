import { ReactElement, useRef,forwardRef,useImperativeHandle} from "react";
import {IPropsForm} from '../typeings/index'
import {Form,Select,Input  } from 'antd';

const { Option } = Select;
// const TdForms:React.FC<IPropsForm>=(props):ReactElement=>{
//     const layout={
//         labelCol: { span: 8 },
//         wrapperCol: { span: 16 }
//     }
//     const[form]=Form.useForm()
//     const childForm=useRef(null)
//     return(
//         <Form
//         ref={childForm} 
//         {...layout}
//         form={form}>
//             {
//                 props.formList.map((item,index)=>(
//                     <Form.Item
//                     key={index} 
//                     label={item.name}
//                     name={item.name}
//                     rules={item.rules}>
//                         {item.inptOrNo==='Select'?
//                              <Select placeholder="select your gender">
//                                  {item.selectList?.map(it=>(
//                                      <Option value={it} key={it}>{it}</Option>
//                                  ))}
//                              </Select>
//                              : <Input />}
//                     </Form.Item>
//                 ))
//             }
//         </Form>
//     )
// }
const TdForms=forwardRef((props:IPropsForm,ref)=>{
    const layout={
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
    }
    const setForm=useRef(null)
    const[form]=Form.useForm()
    useImperativeHandle(ref, () => ({
        name:"获取子组件暴露给父组件",
        form:form,
      }))
    return(
        <Form
        ref={setForm} 
        {...layout}
        form={form}>
            {
                props.formList.map((item,index)=>(
                    <Form.Item
                    key={index} 
                    label={item.name}
                    name={item.name}
                    rules={item.rules}>
                        {item.inptOrNo==='Select'?
                             <Select placeholder="select your gender">
                                 {item.selectList?.map(it=>(
                                     <Option value={it} key={it}>{it}</Option>
                                 ))}
                             </Select>
                             : <Input />}
                    </Form.Item>
                ))
            }
        </Form>
    )
})

export default TdForms






