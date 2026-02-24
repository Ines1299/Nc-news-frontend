const fetchUsers = async () => {
  const url = "https://nc-news-oc7g.onrender.com/api/users";

  try {
    const response = await fetch(encodeURIComponent(url));
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const result = response.json();
    console.log("users", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
