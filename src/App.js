import React, { Fragment, useEffect } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CarListing from "./pages/CarListing"
import CarDetails from "./pages/CarDetails"
import { useDispatch } from "react-redux";
import { startGetCompanies } from "./actions/companiesAction";
import { startGetAllCars } from "./actions/carsAction";



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetCompanies())
    dispatch(startGetAllCars())
  }, [dispatch])

  return (
    <Fragment>
    <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/cars/:slug" element={<CarDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
  </Fragment>
  );
}

export default App;
