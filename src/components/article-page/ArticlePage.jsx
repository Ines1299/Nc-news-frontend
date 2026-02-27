import Article from "./Article";
import Comments from "./Comments";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchArticleById from "../../api/fetchArticleById";
import patchArticle from "../../api/patchArticle";

export default function ArticlePage() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const article_id = params.article_id;

  useEffect(() => {
    if (!loading) getArticleById(article_id);
  }, [article_id]);

  const getArticleById = async (article_id) => {
    try {
      setLoading(true);
      const { article } = await fetchArticleById(article_id);
      setArticle(article);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (vote) => {
    setArticle((current) => ({
      ...current,
      votes: current.votes + vote,
    }));

    try {
      await patchArticle(article_id, vote);
    } catch (err) {
      setArticle((current) => ({
        ...current,
        votes: current.votes - vote,
      }));
      console.error("Vote failed");
    }
  };

  return (
    <>
      <div className="article-page">
        <Article article={article} handleVote={handleVote} />
        <Comments article={article} />
      </div>
    </>
  );
}
