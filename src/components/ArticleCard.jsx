import AllArticles from "./AllArticles";
import { ThumbsUp, MessageCircle } from "lucide-react";

export default function ArticleCard(props) {
  const article = props.article;
  return (
    <li className="article-card">
      <img src={article.article_img_url} width="320"></img>
      <h2 className="article-title">{article.title}</h2>
      <p className="article-topic">{article.topic}</p>
      <div className="article-info">
        <ThumbsUp className="thumbs-up" />
        <p className="article-votes">{article.votes}</p>
        <MessageCircle className="comment" />
        <p className="article-comments">{article.comment_count}</p>
      </div>
    </li>
  );
}
