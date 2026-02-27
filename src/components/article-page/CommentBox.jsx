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
    <li className="comment-box">
      <p className="comment-text">{comment.body}</p>
      <div className="comment-info">
        <p>{comment.author}</p>
        <div className="votes">
          <ThumbsUp className="thumbs-up" />
          <ThumbsDown className="thumbs-up" />
        </div>
        <p className="comment-votes">{comment.votes}</p>
        <p>{newDate}</p>
        {canDelete && (
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="delete-button"
          >
            <Trash2 />
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        )}
      </div>
    </li>
  );
}
