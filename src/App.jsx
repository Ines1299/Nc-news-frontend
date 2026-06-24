import "./App.css";
import { Routes, Route } from "react-router";
import { UserProvider } from "./contexts/User";

import AllArticles from "./components/homepage/AllArticles.jsx";
import About from "./components/About.jsx";
import ArticlePage from "./components/article-page/ArticlePage";
import Header from "./components/nav-bar/Header.jsx";
import UserPage from "./components/logged-in-user/UserPage.jsx";
import Footer from "./components/Footer";

function App() {
  const pages = [{ title: "About", path: "/about" }];
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
            path="/about"
            element={
              <>
                <About />
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
          <Route
            path="/topics/:topic"
            element={
              <>
                <AllArticles />
              </>
            }
          />
          <Route
            path="/users/:username"
            element={
              <>
                <UserPage />
              </>
            }
          />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
