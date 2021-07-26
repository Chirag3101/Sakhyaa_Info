import './App.css';
import Logo from './resources/Logo.jpg';
import { Layout, Menu } from 'antd';


const { Header, Content, Footer } = Layout;


function Navbar(){
    return (
        <div className="App">
          <Layout className="layout">
        <Header>
          <div/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
          <Menu.Item key="1">
            <img src={Logo} alt="Logo" style={{height:68, width:175}}/>
          </Menu.Item>
          <Menu.Item key="2" style={{marginRight : "1%", marginLeft:"auto"}}>
                  <a href="https://www.google.com">All Category</a>
          </Menu.Item>
          <Menu.Item key="3" style={{marginRight : "1%"}}>
                  <a href="https://www.google.com">About us</a>
          </Menu.Item>
          <Menu.Item key="4" style={{marginRight : "1%"}}>
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

export default Navbar;