import { ThumbsUp, MessageCircle } from "lucide-react";
import { Link } from "react-router";

export default function ArticleCard(props) {
  const article = props.article;
  return (
    <li className="group rounded-lg border border-stone-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/articles/${article.article_id}`}>
        <img
          src={article.article_img_url}
          alt={article.title}
          className="w-full h-44 object-cover"
        ></img>
        <div className="p-4">
          <span className="inline-block text-[11px] uppercase tracking-wide font-medium text-indigo-700 border border-indigo-200 rounded-full px-2 py-0.5 mb-2">
            {article.topic}
          </span>
          <h3 className="font-serif text-lg font-semibold text-stone-900 leading-snug group-hover:text-indigo-700 transition-colors">
            {article.title}
          </h3>
          <div className="mt-3 flex items-center justify-between text-xs text-stone-500">
            <span>{article.author}</span>
            <span>
              {article.votes} votes . {article.comment_count} comments
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}
