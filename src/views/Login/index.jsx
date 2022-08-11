import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import {LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import '../../style/Login.less'

const Login = () => {   
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const users = [
      ['admin', 'admin'],
      ['guest', 'guest'],
    ];
    const isCorrected = users.some((user) => user[0] === values.userName && user[1] === values.password);
    //用户名密码符合要求就存到本地 并导航到/
    if(isCorrected){
      localStorage.setItem('user',
        {
          userName:values.userName,
          auth:values.userName === 'admin' ? 0 : 1 //管理员权限是0，普通是1
        }
      );
      navigate("/", { replace: true });
    }
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login" >
      <div className="login-form">
        <div className="login-logo">
          <span>React Admin</span>
        </div>
        <Form onFinish={handleSubmit} style={{ maxWidth: '300px' }}>
          <Form.Item
            name="userName"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input
                prefix={<UserOutlined size={13} />}
                placeholder="管理员输入admin, 游客输入guest"
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
            <Input
              prefix={<LockOutlined size={13} />}
              type="password"
              placeholder="管理员输入admin, 游客输入guest"
            />
          </Form.Item>
          <Form.Item>
            <span className="login-form-forgot" style={{ float: 'right' }}>
                忘记密码
            </span>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: '100%' }}
            >
                登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default ( Login )