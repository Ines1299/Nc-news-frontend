import ArticleCard from "./ArticleCard";
import SortButton from "./SortButton";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchAllArticles from "../../api/fetchArticles";

export default function AllArticles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getArticles();
  }, [topic]);

  const getArticles = async () => {
    try {
      setLoading(true);
      const { articles } = await fetchAllArticles(topic);
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
          <h2>{topic ? `${topic} Articles ` : "All Articles"}</h2>
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
