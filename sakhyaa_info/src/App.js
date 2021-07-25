import './App.css';
import Logo from './resources/Logo.jpg';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;


function App() {
  return (
    <div className="App">
      <Layout className="layout">
    <Header>
      <div/>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">
        <img src={Logo} alt="Logo" style={{height:68, width:175}}/>
      </Menu.Item>
      <Menu.Item key="3" style={{marginRight : "2%", marginLeft:"Auto" }}>
              <a href="https://www.google.com">Register</a>
      </Menu.Item>
      </Menu>
    </Header>
    <Content>
      <div className="site-layout-content"><h1>Content</h1></div>

    </Content>
    <Footer style={{ textAlign: 'center' }}>Designed and Developed by Sakhyaa &#9829;</Footer>
  </Layout>
    </div>
  );
}

export default App;
