import { useEffect, useState } from "react";
import { Link } from "react-router";
import fetchTopics from "../../api/fetchTopics.js";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) getTopics();
  }, []);

  const getTopics = async () => {
    try {
      setLoading(true);
      const topics = await fetchTopics();
      setTopics(topics);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic.slug}>
          <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
        </li>
      ))}
    </ul>
  );
}
