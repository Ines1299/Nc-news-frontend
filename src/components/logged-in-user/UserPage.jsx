import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/User";
import { FileText, ChevronDown } from "lucide-react";
import fetchUsers from "../../api/fetchUsers";
import fetchArticles from "../../api/fetchArticles";
import ArticleCard from "../homepage/ArticleCard";
import SkeletonCard from "../SkeletonCard";
import Button from "../Button";

export default function UserPage() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [userArticles, setUserArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(false);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data ?? []);
    });
  }, []);

  useEffect(() => {
    if (!loggedInUser) return;
    setLoadingArticles(true);
    fetchArticles(null, null, null, null, loggedInUser.username)
      .then((result) => setUserArticles(result?.articles ?? []))
      .catch(console.log)
      .finally(() => setLoadingArticles(false));
  }, [loggedInUser]);

  const handleSwitch = (user) => {
    setLoggedInUser(user);
    setShowSwitcher(false);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="user-card flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8">
        <img
          src={loggedInUser.avatar_url}
          alt={loggedInUser.name}
          className="user-img w-28 h-28 rounded-full object-cover border border-stone-200"
        />
        <div className="text-center sm:text-left">
          <h1 className="font-serif text-2xl font-semibold text-stone-900">
            {loggedInUser.name}
          </h1>
          <h2 className="text-sm text-stone-500 mb-3">
            @{loggedInUser.username}
          </h2>

          <div className="relative mt-4 inline-block">
            <Button
              variant="secondary"
              onClick={() => setShowSwitcher((prev) => !prev)}
            >
              Switch User <ChevronDown size={14} className="ml-1" />
            </Button>
            {showSwitcher && (
              <div className="absolute left-0 mt-2 w-56 bg-white border border-stone-200 rounded-lg shadow-lg z-10 overflow-hidden">
                {users.map((user) => (
                  <button
                    key={user.username}
                    onClick={() => handleSwitch(user)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-stone-800 hover:bg-stone-50 transition-colors"
                  >
                    <img
                      src={user.avatar_url}
                      alt={user.username}
                      className="w-7 h-7 rounded-full object-cover"
                    ></img>
                    <div className="text-left">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-stone-500">@{user.username}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-serif text-xl font-semibold text-stone-900 mb-4">
          Written by {loggedInUser.name}
        </h2>
        {loadingArticles ? (
          <p className="text-sm text-stone-500">Loading articles...</p>
        ) : userArticles.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-12 rounded-lg border border-dashed border-stone-300 text-stone-500">
            <FileText size={28} className="mb-3 text-stone-400" />
            <p className="text-sm">No articles by this user</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {loadingArticles
              ? Array.from({ length: 3 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              : userArticles.map((article) => (
                  <ArticleCard key={article.article_id} article={article} />
                ))}
          </ul>
        )}
      </div>
    </section>
  );
}
