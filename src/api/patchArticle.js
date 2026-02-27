export default async function patchArticle(article_id, inc_votes) {
  const url = `https://nc-news-oc7g.onrender.com/api/articles/${article_id}`;

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inc_votes }),
    });
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
