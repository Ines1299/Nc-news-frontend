import fetchComments from "../../api/fetchComments.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentBox from "./CommentBox";
import PostComment from "./PostComment";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const article_id = params.article_id;
  // console.log(article_id);

  useEffect(() => {
    getComments(article_id);
  }, [article_id]);

  const getComments = async (article_id) => {
    try {
      setLoading(true);
      const { comments } = await fetchComments(article_id);
      setComments(comments);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PostComment article_id={article_id} setComments={setComments} />
      <ul className="all-comments">
        {comments.map((comment) => {
          return (
            <CommentBox
              key={comment.comment_id}
              comment={comment}
              setComments={setComments}
            />
          );
        })}
      </ul>
    </div>
  );
}
