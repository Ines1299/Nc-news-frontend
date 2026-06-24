import { ThumbsUp, MessageCircle } from "lucide-react";
import { Link } from "react-router";

export default function ArticleCard(props) {
  const article = props.article;
  return (
    <li className="group rounded-lg border border-stone-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      <Link
        to={`/articles/${article.article_id}`}
        className="flex flex-col h-full"
      >
        <img
          src={article.article_img_url}
          alt={article.title}
          className="w-full h-44 object-cover"
        ></img>
        <div className="p-4 flex flex-col flex-1">
          <span className="inline-block text-[11px] uppercase tracking-wide font-medium text-indigo-700 border border-indigo-200 rounded-full px-2 py-0.5 mb-2 self-start w-fit">
            {article.topic}
          </span>
          <h3 className="font-serif text-lg font-semibold text-stone-900 leading-snug group-hover:text-indigo-700 transition-colors">
            {article.title}
          </h3>
          <div className="mt-auto pt-3 flex items-center justify-between text-xs text-stone-500">
            <span>{article.author}</span>
            <div className="flex items-center gap-1">
              <span className="flex items-center gap-1">
                <ThumbsUp size={13} /> {article.votes}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle size={13} />
                {article.comment_count}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
