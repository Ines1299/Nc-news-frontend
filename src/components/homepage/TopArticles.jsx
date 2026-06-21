import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
      <div className="articles-header">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Top Articles
        </h2>
      </div>
      <ul className="top-articles grid grid-cols-1 sm:grid-cols-3 gap-6">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
}
