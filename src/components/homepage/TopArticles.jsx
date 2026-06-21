import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchTopArticles from "../../api/fetchTopArticles";

export default function TopArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTopArticles();
  }, []);

  const getTopArticles = async () => {
    try {
      setLoading(true);
      const articles = await fetchTopArticles();
      setArticles(articles ?? []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="articles-header">
          <h2>Top Articles</h2>
        </div>
        <ul className="top-articles">
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </div>
    </>
  );
}
