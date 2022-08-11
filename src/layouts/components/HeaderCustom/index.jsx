import React from 'react';
import '../../../style/headerBar.less'
import {connect} from 'react-redux'
import {create_toggle_side} from '../../../store/actions/toggle_side'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import { Menu,Dropdown } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'
const avatar = require('../../../assets/img/avatar.jpg');


const HeaderCustom = (props) => {

  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem('user')
    navigate('/login', { state: location.pathname })
  }
  
  const menu = (
    <Menu className='menu'>
      <Menu.ItemGroup title='用户中心' className='menu-group'>
        <Menu.Item key={1}>个人信息</Menu.Item>
        <Menu.Item key={2}><span onClick={logout}>退出登录</span></Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title='设置中心' className='menu-group'>
        <Menu.Item key={3}>个人设置</Menu.Item>
        <Menu.Item key={4}>系统设置</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  )

  let {collapsed,sideToggle} = props
  return (
        <div className='header-box'>
          <span className='trigger' >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => sideToggle(collapsed),
            })}
          </span>
          <div style={{ lineHeight: '64px', float: 'right' }}>
            <ul className='header-ul'>
              <li>
                <Dropdown overlay={menu}>
                  <img src={avatar} alt="" />
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
  );
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
	state => ({
		collapsed:state.collapsed,
	}),
	{
		sideToggle:create_toggle_side,
	}
)(HeaderCustom)