export default async function fetchAllArticles(
  topic,
  sortBy,
  order,
  search,
  author,
) {
  let url = "https://nc-news-oc7g.onrender.com/api/articles";
  const params = new URLSearchParams();
  if (topic) params.append("topic", topic);
  if (sortBy) params.append("sort_by", sortBy);
  if (order) params.append("order", order);
  if (search) params.append("search", search);
  if (author) params.append("author", author);

  const queryStr = params.toString();
  if (queryStr) {
    url += `?${queryStr}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const result = await response.json();

    return result;
  } catch (err) {
    console.log(err);
  }
}
