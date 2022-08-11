import { Breadcrumb } from 'antd';
import React from 'react';
import { NavLink as Link, useLocation } from 'react-router-dom';
import '../../../style/breadcrumb.less'

const breadcrumbNameMap = {
  '/tables': '表格',
  '/charts': '图表',
  '/input' : '输入',
  '/input/form' : '表单',
  '/input/form/basic': '基础表单',
  '/input/form/step': '分步表单',
  '/input/upload': '上传',
  '/nest': '多级菜单',
  '/nest/op1': 'op1',
  '/nest/op2': 'op2',
  '/nest/op2/op3': 'op3',
  '/nest/op2/op4': 'op4',
};

    const BreadcrumbCustom = () => {
        const location = useLocation(); 
        const pathSnippets = location.pathname.split('/').filter((i) => i);
        
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            console.log('------url------')
            console.log(url)
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>{breadcrumbNameMap[url]}</Link>
                </Breadcrumb.Item>
            );
    });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">主页</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <div className="demo">
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};

export default BreadcrumbCustom;