import React from 'react';
import HeaderCustom from './components/HeaderCustom'
import Sider from './components/SiderCustom'
import Footer from './components/FooterCustom'
import { Layout,BackTop } from 'antd';
import Router from '../router'
import BreadcrumbCustom from './components/BreadcrumbCustom';
import '../style/Layout.less'

const { Header, Content } = Layout




const TheLayout = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <BackTop />
        <Sider/>
        <Layout className="site-layout">
          <Header style={{ background: '#fff', padding: '0 16px' }}>
            <HeaderCustom/>
          </Header>
          <BreadcrumbCustom></BreadcrumbCustom>
          <Content
            style={{
              margin: '2px 16px',
              padding: 12,
              minHeight: 280,
            }}
          >
          <Router/>
        </Content>
        <Footer  style={{ textAlign: 'center' }}/>
        </Layout>
    </Layout>
    
  );
}

export default TheLayout;
