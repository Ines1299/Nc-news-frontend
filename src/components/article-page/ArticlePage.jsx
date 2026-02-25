import Article from "./Article";
import Comments from "./Comments";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchArticleById from "../../api/fetchArticleById";

export default function ArticlePage() {
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const article_id = params.article_id;

  // console.log(article_id);

  useEffect(() => {
    if (!loading) getArticleById(article_id);
    // console.log(article_id);
  }, [article_id]);

  const getArticleById = async (article_id) => {
    try {
      setLoading(true);
      const { article } = await fetchArticleById(article_id);
      // console.log("article", article);
      setArticle(article);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Article article={article} />
      <Comments article={article} />
    </>
  );
}
