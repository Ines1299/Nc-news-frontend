export default async function postComment(article_id, username, body) {
  const url = `https://nc-news-oc7g.onrender.com/api/articles/${article_id}/comments`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, body }),
    });
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
