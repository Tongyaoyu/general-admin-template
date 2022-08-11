import React,{useState} from 'react'
import {connect} from 'react-redux'
import {change_step_form_state} from '../../../store/actions/toggle_side'
import {Form,  Input, Button, Divider, Alert } from 'antd'
import { digitUppercase } from '../Upload/utils'


const formItemLayout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 19,
    },
};

const Step2 = (props) =>{
    const {stepFormState,changeState} = props;
    console.log(stepFormState)
    const {current,info} = stepFormState;
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const handleSubmit = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            const values={
                current:2,
                info:info
            }
            changeState(values);
        }, 2000)
    }
    return(
        <div>
            <Form className='stepForm' id='step2' form={form} onFinish={handleSubmit}>
                <Alert closable showIcon message="确认转账后，资金将直接打入对方账户，无法退回。" style={{ marginBottom: 24 }} />
                <Form.Item {...formItemLayout} className='setFormText' label="付款账户">
                    {info.payAccount}
                </Form.Item>
                <Form.Item {...formItemLayout} label="收款账户">
                    {info.receiverAccount}
                </Form.Item>
                <Form.Item {...formItemLayout} className='setFormText' label="收款人姓名">
                    {info.receiverName}
                </Form.Item>
                <Form.Item {...formItemLayout} className='setFormText' label="转账金额">
                    <span className='money'>{info.amount}</span>
                    <span>（{digitUppercase(info.amount)}）</span>
                </Form.Item>
                <Divider />
                <Form.Item
                    {...formItemLayout}
                    label="支付密码"
                    required={false}
                    name='password'
                    initialValue='123456'
                    rules={[
                        {
                        required: true,
                        message: '需要支付密码才能进行支付',
                        },
                    ]}
                >
                    <Input type="password" autoComplete="off" style={{ width: '80%' }} />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 8 }}
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                        sm: {
                        span: formItemLayout.wrapperCol.span,
                        offset: formItemLayout.labelCol.span,
                        },
                    }}
                    label=""
                >
                    <Button type="primary" htmlType='submit' loading={loading}>提交</Button>
                    <Button onClick={() => {const values = {current:0,info:info};changeState(values)}} style={{ marginLeft: 8 }}>上一步</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default connect(
	state => ({
		stepFormState:state.stepFormState,
	}),
	{
		changeState:change_step_form_state,
	}
)(Step2);