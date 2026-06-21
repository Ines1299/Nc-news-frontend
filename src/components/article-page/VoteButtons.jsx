import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function VoteButtons({ handleVote }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleVote(1)}
        className="p-1.5 rounded-full hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
        aria-label="Upvote"
      >
        <ThumbsUp size={16} />
      </button>
      <button
        onClick={() => handleVote(-1)}
        className="p-1.5 rounded-full hover:bg-indigo-50 hover:text-red-600 transition-colors"
        aria-label="Downvote"
      >
        <ThumbsDown size={16} />
      </button>
    </div>
  );
}
