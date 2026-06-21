export default function Author(props) {
  const article = props.article;

  return <h2 className="text-sm text-stone-500">by {article.author}</h2>;
}
