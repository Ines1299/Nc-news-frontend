import ArticlePage from "./ArticlePage";
import Author from "./Author";
import { ThumbsUp, MessageCircle } from "lucide-react";

export default function Article(props) {
  const article = props.article;
  // console.log(article);
  return (
    <>
      <Author article={article} />
      <h1>{article.title}</h1>;<img src={article.article_img_url}></img>
      <p className="article-topic">{article.topic}</p>
      <div className="article-info">
        <ThumbsUp className="thumbs-up" />
        <p className="article-votes">{article.votes}</p>
        <MessageCircle className="comment" />
        <p className="article-comments">{article.comment_count}</p>
      </div>
      <p>{article.body}</p>
    </>
  );
}
