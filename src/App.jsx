import { useState } from "react";
import { Router, Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/Header.jsx";
import AllArticles from "./components/homepage/AllArticles.jsx";
import SideBar from "./components/SideBar.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ArticlePage from "./components/article-page/ArticlePage";

function App() {
  const pages = [
    { title: "About us", path: "/about-us" },
    { title: "Contact", path: "/contact" },
    ,
  ];
  return (
    <>
      <Header title="NC News" pages={pages} />
      <SideBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AllArticles className="articles-body" />
            </>
          }
        />
        <Route
          path="/articles/:article_id"
          element={
            <>
              <ArticlePage />
            </>
          }
        ></Route>
        <Route
          path="/about-us"
          element={
            <>
              <AboutUs />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
