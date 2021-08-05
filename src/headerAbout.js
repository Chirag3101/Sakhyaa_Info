import { React } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Typography,
  Divider,
  Image,
  Col,
  Row,
} from "antd";
// import { Title } from "./AuStyles.js";
import "./AuStyles.css";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const spacing = {
  margin: "109px",
};

function ImageDemo() {
  return (
    <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  );
}

const AboutUs = () => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Title id="header" className="ant ant-align-center">
              About Us
            </Title>
            <Divider />
            <p className="an" style={{ textAlign: "Center" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
              merninisti licere mihi ista probare, quae sunt a te dicta? Refert
              tamen, quo modo.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
              merninisti licere mihi ista probare, quae sunt a te dicta? Refert
              tamen, quo modo.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
              merninisti licere mihi ista probare, quae sunt a te dicta? Refert
              tamen, quo modo.
              <br />
            </p>
            <div className="site-card-wrapper" style={{ spacing }}>
              <Row gutter={16}>
                <Col span={8}>
                  <ImageDemo style={{ justify: "right" }} />{" "}
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    nonne merninisti licere mihi ista probare, quae sunt a te
                    dicta? Refert tamen, quo modo.
                  </p>
                </Col>
                <Col span={8}>
                  <ImageDemo style={{ justify: "right" }}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed nonne merninisti licere mihi ista probare, quae sunt a
                      te dicta? Refert tamen, quo modo.
                    </p>
                  </ImageDemo>{" "}
                </Col>
                <Col span={8}>
                  <ImageDemo style={{ justify: "right" }} />{" "}
                </Col>
              </Row>
            </div>
            <Divider />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Designed and Developed by Sakhyaa &#9829;{" "}
        </Footer>
      </Layout>
    </>
  );
};

export default AboutUs;
