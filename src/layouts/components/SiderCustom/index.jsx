import React, { useState , useEffect } from 'react';
import { NavLink as Link, useLocation } from 'react-router-dom';
import {connect} from 'react-redux'
import {
  DesktopOutlined,
  AppstoreOutlined,
  SettingOutlined,
  HomeOutlined,
  FormOutlined
} from '@ant-design/icons';
import { Layout,Menu } from 'antd';
const {Sider} = Layout;

function getItem(label, key, icon, children, type) {
  return {
    label,
    key,
    icon,
    children,
    type,
  };
}

const items = [
  getItem(<Link to="/">首页</Link>, '/', <HomeOutlined />),
  getItem(<Link to="/tables">表格</Link>, '/tables', <DesktopOutlined/>),
  getItem(<Link to="/charts">图表</Link>, '/charts', <SettingOutlined />),
  getItem('输入组件', '/input', <FormOutlined />, [
    getItem('表单', '/input/form',null,[
      getItem(<Link to="/input/form/basic">基础表单</Link>, '/input/form/basic'),
      getItem(<Link to="/input/form/step">分步表单</Link>, '/input/form/step'),
    ]),
    getItem(<Link to="/input/upload">上传</Link>, '/input/upload'),
  ]),
  getItem('多级菜单', '/nest', <AppstoreOutlined />, [
    getItem(<Link to="/nest/op1">Option 1</Link>, '/nest/op1'),
    getItem('Option 2', '/nest/op2',null,[
      getItem(<Link to="/nest/op2/op3">Option 3</Link>, '/nest/op2/op3'),
      getItem(<Link to="/nest/op2/op4">Option 4</Link>, '/nest/op2/op4'),
    ]),
  ]),
];



const SiderCustom = (props) => {
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(['/']);

  let pathname = useLocation().pathname;//获取当前的地址，用于菜单栏当前选择项高亮

  useEffect(() => {//当路径发生改变时，设置选中的key
    setSelectedKeys([pathname])
  }, [pathname])

  const subMenuOpenChange = (openItems) => {
    //这个回调函数在你点多级菜单时会把当前点击的父key放到openItems数组中
    const curOpenKey = openItems[openItems.length - 1];
    //如果当前点击的菜单key包含其父级菜单 就打开该菜单
    //如果是另外的多级菜单 那么curOpenKey是不包含之前的菜单key的，则把openKeys更新为当前的父级菜单
    //如果是合上二级菜单curOpenKey为undefined，不加上这个条件就合不上
    if (!curOpenKey || curOpenKey.includes(openItems[0])) {
      setOpenKeys(openItems) 
    } else {
      setOpenKeys([curOpenKey]) 
    }
    //if和else里操作可能是异步的，因为我打印set后的OpenKeys没有变化
   
  }

  const menuItemClick = ({ key, keyPath }) => {
    setSelectedKeys([pathname])
    if (keyPath.length === 1) setOpenKeys([]);
  }

  let location = useLocation();//获取当前的地址，用于菜单栏当前选择项高亮
  let {collapsed} = props
  return ( 
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        items={items}
        onClick={menuItemClick}
        openKeys={openKeys}
        onOpenChange={subMenuOpenChange}
      />
    </Sider>
  );
}

export default connect(
	state => ({
		collapsed:state.collapsed,
	}),
	{}
)(SiderCustom)