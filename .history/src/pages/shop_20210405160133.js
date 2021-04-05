
import { useContext, useEffect } from "react";
import { Layout } from 'antd';
import { setProductDetail } from "../actions";
import { StoreContext } from "../store";
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import CartSummary from "../components/CartSummary";
import CartModal from "../components/CartModal";
const { Header, Content, Footer } = Layout;

function Cart({ match }) {
     const { dispatch } = useContext(StoreContext);   
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
          <CartModel/>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>

   );
}

export default Cart;