import { useState } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Layout, Breadcrumb } from 'antd';

import './App.css';
import { MenuRoutes } from '../routes/MenuRoutes';
import { BodyRoutes } from '../routes/BodyRoutes';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed}
            onCollapse={setCollapsed}>
          <div className="logo" />
          <MenuRoutes />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item> */}
              {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <BodyRoutes />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>LPG</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
