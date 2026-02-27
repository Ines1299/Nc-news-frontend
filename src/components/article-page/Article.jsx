import ArticlePage from "./ArticlePage";
import Author from "./Author";
import { ThumbsUp, MessageCircle, ThumbsDown } from "lucide-react";
import VoteButtons from "./VoteButtons";

export default function Article({ article, handleVote }) {
  if (!article) return <p>Loading...</p>;
  return (
    <>
      <h1 className="articleTitle">{article.title}</h1>
      <Author article={article} />
      <img src={article.article_img_url}></img>
      <div className="article-info">
        <p className="article-topic">{article.topic}</p>
        <div className="article-votes">
          <VoteButtons handleVote={handleVote} />
          <p className="article-votes">{article.votes}</p>
          <MessageCircle className="comment" />
          <p className="article-comments">{article.comment_count}</p>
        </div>
      </div>
      <p>{article.body}</p>
    </>
  );
}
