import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function VoteButtons({ isOwner, hasVoted }) {
  const disabled = isOwner || hasVoted;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => !disabled && handleVote(1)}
        disabled={disabled}
        title={
          isOwner
            ? "You can't vote on your own content"
            : hasVoted
              ? "You've already voted"
              : "Upvote"
        }
        className={`p-1.5 rounded-full transition-colors ${
          disabled
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-indigo-50 hover:text-indigo-700"
        }`}
        aria-label="Upvote"
      >
        <ThumbsUp size={16} />
      </button>
      <button
        onClick={() => !disabled && handleVote(-1)}
        className={`p-1.5 rounded-full transition-colors ${
          disabled
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-red-50 hover:text-red-600"
        }`}
        title={
          isOwner
            ? "You can't vote on your own content"
            : hasVoted
              ? "You've already voted"
              : "Downvote"
        }
        aria-label="Downvote"
      >
        <ThumbsDown size={16} />
      </button>
    </div>
  );
}
