import { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage'
import RegisterSeller from './Components/RegisterSeller'
import CategoryPage from './Components/CategoryPage'
import Layout from './Components/Layout'
import Home from './Components/Home'
import AccountPage from './Components/AccountPage'
import MyOrdersPage from './Components/MyOrdersPage'
import MyProductsPage from './Components/MyProductsPage'
import MyProductDevelopmentPage from './Components/MyProductDevelopmentPage'
import MyTransactionsPage from './Components/MyTransactionsPage'
import SellWithUs from './Components/SellWithUs'
import RequestQuotePage from './Components/RequestQuotePage'
import AboutUsPage from './Components/AboutUsPage'
import SupportPage from './Components/SupportPage'
import AgentSignupPage from './Components/AgentSignUpPage'
import WorkWithUsPage from './Components/WorkWithUs/WorkWithUsPage'
import PolicyPage from './Components/PolicyPage'
import Shop from './Components/Shop'
import CartPage from './Components/Cart/CartPage'
import CheckoutPage from './Components/Cart/CheckoutPage'
import PaymentPage from './Components/Cart/PaymentPage'
import MobileLandingPage from './Components/LandingPage/MobileLandingPage'
function App() {
const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, );
  return (
 <>
<Routes>
      <Route path="/" element={isMobile ? <MobileLandingPage /> : <LandingPage />} />
      <Route path="/register" element={<RegisterSeller />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/sellwithus" element={<SellWithUs />} />
      <Route path="/requestquote" element={<RequestQuotePage />} />
      <Route path="/aboutus" element={<AboutUsPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/payment" element={<PaymentPage/>} />
      <Route path="/agentsignup" element={<AgentSignupPage />} />
      <Route path="/workwithus" element={<WorkWithUsPage />} />
      <Route path="/shipping-policy" element={<PolicyPage policyKey="shipping" />} />
      <Route path="/return-policy" element={<PolicyPage policyKey="return" />} />
      <Route path="/privacy-policy" element={<PolicyPage policyKey="privacy" />} />
      <Route path="/general-tc" element={<PolicyPage policyKey="generalTC" />} />
      <Route path="/free-sample-policy" element={<PolicyPage policyKey="freeSample" />} />
      <Route path="/cart" element={<CartPage />} />

      <Route path="/home" element={
      <Layout>
        <Home />
      </Layout>
    } />
          <Route path="/account" element={
      <Layout>
        <AccountPage />
      </Layout>
    } />
          <Route path="/orders" element={
      <Layout>
        <MyOrdersPage />
      </Layout>
    } />
          <Route path="/products" element={
      <Layout>
        <MyProductsPage />
      </Layout>
    } />
          <Route path="/development" element={
      <Layout>
        <MyProductDevelopmentPage />
      </Layout>
    } />
          <Route path="/transactions" element={
      <Layout>
        <MyTransactionsPage />
      </Layout>
    } />
</Routes>
 </>
  )
}

export default App
