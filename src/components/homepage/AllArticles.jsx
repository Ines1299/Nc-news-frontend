import ArticleCard from "./ArticleCard";
import SortButton from "./SortButton";
import TopArticles from "./TopArticles";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import fetchAllArticles from "../../api/fetchArticles";
import SkeletonCard from "../SkeletonCard";
import { SearchX } from "lucide-react";

export default function AllArticles() {
  const { topic } = useParams();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  useEffect(() => {
    getArticles();
  }, [topic, sortBy, order, search]);

  const getArticles = async () => {
    try {
      setLoading(true);
      const { articles } = await fetchAllArticles(topic, sortBy, order, search);
      setArticles(articles);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSortChange = (newSortBy, newOrder) => {
    setSortBy(newSortBy);
    setOrder(newOrder);
  };

  const isHomePage = !search && !topic;
  const noResults = !loading && articles.length === 0 && search;

  return (
    <div className="articles max-w-6xl mx-auto px-4 sm:px-6 pt-8">
      {isHomePage && (
        <div className="top-articles">
          <TopArticles />
        </div>
      )}

      {noResults ? (
        <div className="flex flex-col items-center justify-center text-center py-20 text-stone-500">
          <SearchX size={36} className="mb-4 text-stone-400" />
          <p className="text-lg font-medium text-stone-700 ">
            No Results found
          </p>
          <p className="text-sm mt-1">
            No Articles matching
            <span className="font-medium"> "{search}"</span> yet - try a
            different search term.
          </p>
        </div>
      ) : (
        <>
          <div
            className="articles-header
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          flex
          items-center
          justify-between
          pt-8"
          >
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mt-20">
              {search
                ? `Results for ${search}`
                : topic
                  ? `${topic} Articles `
                  : "All Articles"}
            </h2>
            <SortButton
              sortBy={sortBy}
              order={order}
              onSortChange={handleSortChange}
            />
          </div>
          <ul className="all-articles grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm mt-10">
            {loading
              ? Array.from({ length: 9 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              : articles.map((article) => (
                  <ArticleCard key={article.article_id} article={article} />
                ))}
          </ul>
        </>
      )}
    </div>
  );
}
