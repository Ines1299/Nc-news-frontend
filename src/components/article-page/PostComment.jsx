import { useState, useContext } from "react";
import postComment from "../../api/postComment";
import { UserContext } from "../../contexts/User";
import Button from "../Button";

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
    <form
      id="post-comment"
      className="post-comment-form flex flex-col sm:flex-row gap-3"
      onSubmit={handleSubmit}
    >
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="post-comment-box flex-1 rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
        type="text"
        placeholder="Write your thoughts here"
      ></input>
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
}
