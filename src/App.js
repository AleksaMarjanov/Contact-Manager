import Layout from "./components/layout/Layout";
import React from "react";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Layout />
      <Main />
      <Footer />
    </>
  );
};

export default App;
