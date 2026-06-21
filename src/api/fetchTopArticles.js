export default async function fetchTopArticles() {
  let url =
    "https://nc-news-oc7g.onrender.com/api/articles/?sort_by=votes&order=DESC";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const result = await response.json();
    const topThree = result.articles.slice(0, 3);
    return topThree;
  } catch (err) {
    console.log(err);
  }
}
