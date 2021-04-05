
import { useContext, useEffect } from "react";
import { Layout } from 'antd';
import { StoreContext } from "../store";
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import CartModal from "../components/CartModal";

const { Header, Content, Footer } = Layout;

function shop() {
     //const { dispatch } = useContext(StoreContext);   
   return (
      <Layout className="container main-layout">
      <Layout className="bg-gray">
        <NavBar />
      </Layout>
      <Layout className="bg-gray">
        <Header className="layout-header">
          <AppHeader title="ShoopingCart" />
        </Header>
        <Content className="layout-content">
          <CartModal></CartModal>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>

   );
}

export default shop;