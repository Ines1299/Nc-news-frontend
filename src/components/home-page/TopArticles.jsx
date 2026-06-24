import { useEffect, useState } from "react";

import fetchTopArticles from "../../api/fetchTopArticles";

import ArticleCard from "./ArticleCard";
import SkeletonCard from "../skeletons/SkeletonCard";

export default function TopArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopArticles();
  }, []);

  const getTopArticles = async () => {
    try {
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
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : articles.map((article) => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
      </ul>
    </div>
  );
}
