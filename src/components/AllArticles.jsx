import ArticleCard from "./ArticleCard";
import SortButton from "./SortButton";
import { useEffect, useState } from "react";
import fetchAllArticles from "../api/fetchArticles";

export default function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) getArticles();
  }, []);

  const getArticles = async () => {
    try {
      setLoading(true);
      const { articles } = await fetchAllArticles();
      console.log("articles", articles);
      setArticles(articles);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="articles">
        <div className="articles-header">
          <h2>All Articles</h2>
          <SortButton />
        </div>
        <ul className="all-articles">
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </div>
    </>
  );
}
