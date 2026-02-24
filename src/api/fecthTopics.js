const fetchTopics = async () => {
  const url = "https://nc-news-oc7g.onrender.com/api/topics";

  try {
    const response = await fetch(encodeURIComponent(url));
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const result = response.json();
    console.log("topics", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
