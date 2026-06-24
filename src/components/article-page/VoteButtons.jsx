import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function VoteButtons({ handleVote, isOwner, currentVote }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleVote(1)}
        disabled={isOwner}
        title={
          isOwner
            ? "You can't vote on your own content"
            : currentVote === 1
              ? "Remove upvote"
              : "Upvote"
        }
        className={`p-1.5 rounded-full transition-colors ${
          isOwner
            ? "opacity-40 cursor-not-allowed"
            : currentVote === 1
              ? "bg-indigo-100 text-indigo-700"
              : "hover:bg-indigo-50 hover:text-indigo-700"
        }`}
        aria-label="Upvote"
      >
        <ThumbsUp size={16} />
      </button>
      <button
        onClick={() => handleVote(-1)}
        disabled={isOwner}
        className={`p-1.5 rounded-full transition-colors ${
          isOwner
            ? "opacity-40 cursor-not-allowed"
            : currentVote === -1
              ? "bg-red-100 text-red-600"
              : "hover:bg-red-50 hover:text-red-600"
        }`}
        title={
          isOwner
            ? "You can't vote on your own content"
            : currentVote === -1
              ? "Remove Downvote"
              : "Downvote"
        }
        aria-label="Downvote"
      >
        <ThumbsDown size={16} />
      </button>
    </div>
  );
}
