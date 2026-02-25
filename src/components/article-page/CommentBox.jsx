import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function CommentBox(props) {
  const comment = props.comment;
  const created_at = comment.created_at;
  console.log(created_at);
  const newDate = created_at.replaceAll("T", " Time ").slice(0, -8);
  console.log(comment);
  return (
    <li className="comment-box">
      <p>{comment.body}</p>
      <div className="comment-info">
        <ThumbsUp className="thumbs-up" />
        <ThumbsDown className="thumbs-up" />
        <p className="comment-votes">{comment.votes}</p>
        <p>{newDate}</p>
      </div>
    </li>
  );
}
