export default async function postComment(article_id) {
  const url = `https://nc-news-oc7g.onrender.com/api/articles/${article_id}/comments`;

  try {
    const response = await fetch(url, {
      method: "URL",
    });
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
