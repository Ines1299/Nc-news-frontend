import ArticlePage from "./ArticlePage";

export default function Author(props) {
  const article = props.article;

  return <h2>{article.author}</h2>;
}
