import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./components/cart";
import Footer from './components/footer';

import Home from './components/home';

import { useEffect } from "react";
import { fetchProducts } from "./redux/actions";

import ProductCard from "./components/productCard";

import SignUp from "./components/signup";
import SignIn from "./components/signin";

import { useDispatch } from 'react-redux';
import './App.css';
import ProductList from "./components/productList";
import { IsUserAuthenticated } from "./components/userAuth";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/detail/:id" element={<ProductCard />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route element={<IsUserAuthenticated />}> */}
        {/* <Route path="/cart" element={<Cart />} /></Route> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  );
}