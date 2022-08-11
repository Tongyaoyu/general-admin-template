import React from 'react'
import {connect} from 'react-redux'
import {change_step_form_state} from '../../../store/actions/toggle_side'
import { Form, Button } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

const formItemLayout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 19,
    },
};

const Step3 = (props) =>{
    const {stepFormState,changeState} = props;
    const {current,info} = stepFormState;
    return (
        <div id='step3'>
            <div>
                <div className='icon-box'>
                    <CheckCircleOutlined />
                </div>
                <div>
                    <h3 className='success'>操作成功</h3>
                    <p className='success-desc'>预计两小时内到账</p>
                </div>
                <Form className='result'>
                    <Form.Item>
                        <Form.Item {...formItemLayout} className='setFormText' label="付款账户">
                            {info.payAccount}
                        </Form.Item>
                        <Form.Item {...formItemLayout} style={{ marginBottom: 10 }} label="收款账户">
                            {info.receiverAccount}
                        </Form.Item>
                        <Form.Item {...formItemLayout} className='setFormText' label="收款人姓名">
                            {info.receiverName}
                        </Form.Item>
                        <Form.Item {...formItemLayout} className='setFormText' label="转账金额">
                            <span className='money'>{info.amount}</span>元
                        </Form.Item>
                    </Form.Item>
                </Form>
                <div>
                    <Button type='primary' onClick={() => {const values = {current:0,info:info};changeState(values)}}>再转一笔</Button>
                    <Button style={{ marginLeft: 8 }}>查看账单</Button>
                </div>
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
)(Step3);