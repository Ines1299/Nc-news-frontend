import { useState, useContext } from "react";
import postComment from "../../api/postComment";
import { UserContext } from "../../contexts/User";

export default function PostComment({ article_id, setComments }) {
  const { loggedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newComment) return;

    try {
      const { comment } = await postComment(
        article_id,
        loggedInUser.username,
        newComment,
      );

      setComments((currentComments) => {
        return [comment, ...currentComments];
      });

      setNewComment("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="post-comment-form" onSubmit={handleSubmit}>
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="post-comment-box"
        type="text"
        placeholder="Write your thoughts here"
      ></input>
      <input className="comment-button" type="submit" value="Submit"></input>
    </form>
  );
}
