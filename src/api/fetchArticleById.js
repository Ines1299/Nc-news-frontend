export default async function fetchArticleById(article_id) {
  const url = `https://nc-news-oc7g.onrender.com/api/articles/${article_id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const result = await response.json();
    // console.log("articles", result);
    return result;
  } catch (err) {
    console.log(err);
  }
}
