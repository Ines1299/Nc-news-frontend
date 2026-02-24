const fetchComments = async (article_id) => {
  const url = `https://nc-news-oc7g.onrender.com/api/articles/${article_id}/comments`;

  try {
    const response = await fetch(encodeURIComponent(url));
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const result = response.json();
    console.log("comments", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
