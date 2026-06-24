import { ThumbsUp, ThumbsDown, Trash2 } from "lucide-react";
import { UserContext } from "../../contexts/User";
import { useContext, useState } from "react";
import deleteComment from "../../api/deleteComment";

export default function CommentBox({ comment, setComments }) {
  const { loggedInUser } = useContext(UserContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentVote, setCurrentVote] = useState(null);
  const [votes, setVotes] = useState(comment.votes);

  const created_at = comment.created_at;
  const newDate = created_at.replaceAll("T", " Time ").slice(0, -8);
  const isOwner = loggedInUser.username === comment.author;

  const handleVote = (value) => {
    if (isOwner) return;
    if (currentVote === value) {
      setCurrentVote(null);
      setVotes((current) => current - value);
    } else {
      if (currentVote === value) {
        setVotes((current) => current - currentVote);
      }
      setCurrentVote(value);
      setVotes((current) => current + value);
    }
  };

  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await deleteComment(comment.comment_id);
      setComments((currentComments) =>
        currentComments.filter((c) => c.comment_id !== comment.comment_id),
      );
    } catch (err) {
      console.log(err);
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <li className="comment-box rounded-lg border border-stone-200 bg-white p-4">
      <p className="comment-text text-stone-800 text-sm leading-relaxed">
        {comment.body}
      </p>
      <div className="comment-info flex items-center flex-wrap gap-4 mt-3 text-xs text-stone-500">
        <span className="font-medium text-stone-700">{comment.author}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleVote(1)}
            disabled={isOwner}
            title={
              isOwner
                ? "You can't vote on your own comment"
                : currentVote === 1
                  ? "Remove upvote"
                  : "Upvote"
            }
            className={`transition-colors ${
              isOwner
                ? "opacity-40 cursor-not-allowed"
                : currentVote === 1
                  ? "text-indigo-700"
                  : "hover:text-indigo-700"
            }`}
            aria-label="Upvote"
          >
            <ThumbsUp size={14} />
          </button>
          <span className="comment-votes">{votes}</span>
          <button
            onClick={() => handleVote(-1)}
            disabled={isOwner}
            title={
              isOwner
                ? "You can't vote on your own comment"
                : currentVote === -1
                  ? "Remove DOwnvote"
                  : "Downvote"
            }
            className={`transition-colors ${
              isOwner
                ? "opacity-40 cursor-not-allowed"
                : currentVote === -1
                  ? "text-red-600"
                  : "hover:text-red-600"
            }`}
            aria-label="Downvote"
          >
            <ThumbsDown size={14} />
          </button>
        </div>
        <span>{newDate}</span>
        {isOwner && (
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="delete-button ml-auto flex items-center gap-1 text-red-600 hover:text-red-700 disabled:opacity-50 transition-colors"
          >
            <Trash2 size={14} />
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        )}
      </div>
    </li>
  );
}
