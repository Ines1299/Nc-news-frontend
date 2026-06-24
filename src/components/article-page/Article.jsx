import { Link } from "react-router";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";

import { MessageCircle } from "lucide-react";

import Author from "./Author";
import VoteButtons from "./VoteButtons";

export default function Article({ article, handleVote }) {
  const { loggedInUser } = useContext(UserContext);
  const [currentVote, setCurrentVote] = useState(null);

  if (!article)
    return <p className="text-center text-stone-500 py-12">Loading...</p>;

  const isOwner = loggedInUser.username === article.author;

  const handleVoteToggle = (vote) => {
    if (isOwner) return;

    if (currentVote === vote) {
      setCurrentVote(null);
      handleVote(-vote);
    } else {
      if (currentVote !== null) {
        handleVote(-currentVote);
      }
      setCurrentVote(vote);
      handleVote(vote);
    }
  };
  const created_at = article.created_at;
  const newDate = created_at.replaceAll("T", " Time ").slice(0, -8);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-8">
      <Link
        to={`/topics/${article.topic}`}
        className="inline-block text-[11px] uppercase tracking-wide font-medium text-indigo-700 border border-indigo-200 rounded-full px-2 py-0.5 mb-3"
      >
        {article.topic}
      </Link>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 leading-tight">
        {article.title}
      </h1>
      <div className="mt-3">
        <Author article={article} />
      </div>
      <img
        src={article.article_img_url}
        alt={article.title}
        className="w-full h-72 sm:h-96 object-cover rounded-lg mt-6"
      ></img>
      <div className="flex items-center gap-6 mt-6 pb-6 border-b border-stone-200 text-sm text-stone-600">
        <VoteButtons
          handleVote={handleVoteToggle}
          isOwner={isOwner}
          currentVote={currentVote}
        />
        <span>{article.votes} votes</span>
        <a
          href="#post-comment"
          className="flex items-center gap-1 hover:text-indigo-700 transition-colors cursor-pointer"
        >
          <MessageCircle size={16} />
          <span className="flex items-center gap-1">
            {article.comment_count} comments
          </span>
        </a>
        <span>{newDate}</span>
      </div>
      <p className="mt-6 text-stone-700 leading-relaxed whitespace-pre-line">
        {article.body}
      </p>
    </article>
  );
}
