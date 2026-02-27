import { useState } from "react";
import { Router, Routes, Route } from "react-router";
import { UserProvider } from "./contexts/User";
import "./App.css";
import UserPage from "./components/logged-in-user/UserPage.jsx";
import Header from "./components/Header.jsx";
import AllArticles from "./components/homepage/AllArticles.jsx";
import SideMenu from "./components/SideMenu.jsx";
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
      <UserProvider>
        <Header title="NC News" pages={pages}></Header>

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
          <Route
            path="/user"
            element={
              <>
                <UserPage />
              </>
            }
          />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
