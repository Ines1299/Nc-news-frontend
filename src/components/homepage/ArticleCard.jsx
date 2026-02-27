import AllArticles from "./AllArticles";
import { ThumbsUp, MessageCircle } from "lucide-react";
import { Link } from "react-router";

export default function ArticleCard(props) {
  const article = props.article;
  return (
    <Link to={`/articles/${article.article_id}`}>
      <li className="article-card">
        <img src={article.article_img_url} width="320"></img>
        <h2 className="article-title">{article.title}</h2>
        <div className="article-info">
          <p className="article-topic">{article.topic}</p>
          <div className="properties">
            <ThumbsUp className="thumbs-up" />

            <p className="article-votes">{article.votes}</p>
          </div>
          <div className="properties">
            <MessageCircle className="comment" />
          </div>
          <p className="article-comments">{article.comment_count}</p>
        </div>
      </li>
    </Link>
  );
}
