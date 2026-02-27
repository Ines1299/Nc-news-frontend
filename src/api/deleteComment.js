export default async function deleteComment(comment_id) {
  const url = `https://nc-news-oc7g.onrender.com/api/comments/${comment_id}`;

  const response = await fetch(url, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error(`Response status: ${response.status}`);
}
