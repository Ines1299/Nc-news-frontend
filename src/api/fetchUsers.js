export default async function fetchUsers() {
  const url = "https://nc-news-oc7g.onrender.com/api/users";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const result = await response.json();
    // console.log("users", result);
    return result;
  } catch (err) {
    console.log(err);
  }
}
