import { useState } from 'react'
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
function App() {

  return (
 <>
<Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/register" element={<RegisterSeller />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/sellwithus" element={<SellWithUs />} />
      <Route path="/requestquote" element={<RequestQuotePage />} />
      <Route path="/aboutus" element={<AboutUsPage />} />
      <Route path="/support" element={<SupportPage />} />


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
