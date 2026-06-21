import { ThumbsUp, ThumbsDown, Trash2 } from "lucide-react";
import { UserContext } from "../../contexts/User";
import { useContext, useState } from "react";
import deleteComment from "../../api/deleteComment";

export default function CommentBox({ comment, setComments }) {
  const { loggedInUser } = useContext(UserContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  //new date format
  const created_at = comment.created_at;
  const newDate = created_at.replaceAll("T", " Time ").slice(0, -8);

  const canDelete = loggedInUser.username === comment.author;

  const handleDelete = async () => {
    if (isDeleting) return;

    setIsDeleting(true);
    setDeleteError(null);

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
            className="hoover:text-indigo-700 transition-colors"
            aria-label="Downvote"
          >
            <ThumbsDown size={14} />
          </button>
          <span className="comment-votes">{comment.votes}</span>
          <button className="hoover:text-indigo-700 transition-colors">
            <ThumbsUp size={14} />
          </button>
        </div>
        <span>{newDate}</span>
        {canDelete && (
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
