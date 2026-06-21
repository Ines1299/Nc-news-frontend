import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { FileText } from "lucide-react";

export default function UserPage() {
  const { loggedInUser } = useContext(UserContext);
  const bio =
    "Coffee-fueled writer covering everything from weeknight dinners to weekend football. Always chasing a good story (and a better recipe).";
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="user-card flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8"></div>
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
        <p className="text-stone-700 leading-relaxed max-w-md">{bio}</p>
      </div>

      <div className="mt-8">
        <h2 className="font-serif text-xl font-semibold text-stone-900 mb-4">
          Written by {loggedInUser.name}
        </h2>
        <div className="flex flex-col items-center justify-center text-center py-12 rounded-lg border border-dashed border-stone-300 text-stone-500">
          <FileText size={28} className="mb-3 text-stone-400" />
          <p className="text-sm">No articles yet</p>
        </div>
      </div>
    </section>
  );
}
