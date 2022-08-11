import React from 'react'
import {connect} from 'react-redux'
import {change_step_form_state} from '../../../store/actions/toggle_side'
import { Form, Select, Input, Button,Divider } from 'antd'

const { Option } = Select;

const formItemLayout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 19,
    },
};

const tailFormItemLayout = {
    wrapperCol: {
      offset: 5
    }
}

const Step1 = (props) => {
    const {stepFormState,changeState} = props;
    const {current,info} = stepFormState;
    const [form] = Form.useForm();
    const nextStep = (values) => {
        values={
            current:1,
            info:values
        }
        console.log(values)
        changeState(values)
    }
    return (
        <div>
            <Form className='stepForm' hideRequiredMark form={form} onFinish={nextStep}>
                <Form.Item
                    {...formItemLayout}
                    label="付款账户"
                    name='payAccount'
                    rules={[{ required: true, message: '请选择付款账户' }]}
                    initialValue='ant-design@alipay.com'
                >
                    <Select placeholder="test@example.com">
                        <Option value="ant-design@alipay.com">ant-design@alipay.com</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="收款账户"
                >
                    <Input.Group compact>
                        <Select defaultValue='alipay' style={{ width: 100 }}>
                            <Option value="alipay">支付宝</Option>
                            <Option value="bank">银行账户</Option>
                        </Select>
                        <Form.Item
                            style={{ width: 'calc(100% - 100px)', marginBottom: 0 }}
                            name='receiverAccount'
                            rules={[
                                { required: true, message: '请输入收款人账户' },
                                { type: 'email', message: '账户名应为邮箱格式' },
                            ]}
                            initialValue={info.receiverAccount ? info.receiverAccount : 'test@example.com'}
                        >
                            <Input />
                        </Form.Item>
                    </Input.Group>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="收款人姓名"
                    name='receiverName'
                    rules={[{ required: true, message: '请输入收款人姓名' }]}
                    initialValue={info.receiverName ? info.receiverName : 'Alex'}
                >
                    <Input placeholder="请输入收款人姓名" />
                </Form.Item>
                <Form.Item
                {...formItemLayout}
                label="转账金额"
                name='amount'
                rules={[
                    { required: true, message: '请输入转账金额' },
                    {
                    pattern: /^(\d+)((?:\.\d+)?)$/,
                    message: '请输入合法金额数字',
                    },
                ]}
                initialValue={info.amount ? info.amount : '500'}
                >
                    <Input prefix="￥" placeholder="请输入金额" />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                <Button htmlType='submit' type='primary'>下一步</Button>
                </Form.Item>
            </Form>
            <Divider />
            <div className='desc'>
                <h3>说明</h3>
                <h4>转账到支付宝账户</h4>
                <p>
                    如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
                </p>
            </div>
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
)(Step1);