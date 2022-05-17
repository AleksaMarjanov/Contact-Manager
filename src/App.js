import Layout from "./components/layout/Layout";
import React from "react";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Layout />
      <Main />
      <Header />
      <Footer />
    </>
  );
};

export default App;
