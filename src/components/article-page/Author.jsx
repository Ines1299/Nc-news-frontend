import { Link } from "react-router";

export default function Author(props) {
  const article = props.article;

  return (
    <Link to={`/users/${article.author}`} className="text-sm text-stone-500">
      by {article.author}
    </Link>
  );
}
