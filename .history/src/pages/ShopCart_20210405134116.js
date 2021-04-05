import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";
import CartModal from "../components/CartModal";

const { Header, Content, Footer } = Layout;

function ShopCart() {
  // const product = products.find(
    //  x => x.id === match.params.productId
   //);
   return (
      <Layout className="container main-layout">
         <Layout className="bg-gray">
            <NavBar />
         </Layout>
         <Layout className="bg-gray">     
            <Header className="layout-header">
               <AppHeader title="Shopping Cart" />
            </Header>
            
               <CartModal/>
        
            <Footer className="layout-footer">
               <AppFooter />
            </Footer>
         </Layout>
      </Layout>
   );
}

export default ShopCart;