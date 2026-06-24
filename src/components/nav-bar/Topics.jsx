import { useEffect, useState } from "react";
import { Link } from "react-router";
import fetchTopics from "../../api/fetchTopics.js";
import { Utensils, Code2, Trophy } from "lucide-react";

const icons = {
  cooking: <Utensils size={13} />,
  coding: <Code2 size={13} />,
  football: <Trophy size={13} />,
};
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
    <ul className="flex items-center gap-1">
      {topics.map((topic) => (
        <li key={topic.slug}>
          <Link
            to={`/topics/${topic.slug}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors capitalize"
          >
            {icons[topic.slug] ?? null}
            {topic.slug}
          </Link>
        </li>
      ))}
    </ul>
  );
}
