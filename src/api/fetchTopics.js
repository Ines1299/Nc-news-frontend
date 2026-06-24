export default async function fetchTopics() {
  const url = "https://nc-news-oc7g.onrender.com/api/topics";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const { topics } = await response.json();
    console.log("topics", topics);
    return topics;
  } catch (err) {
    console.log(err);
  }
}
