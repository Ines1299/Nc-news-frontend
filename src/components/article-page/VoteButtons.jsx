import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";

export default function VoteButtons({ handleVote }) {
  return (
    <>
      <button onClick={() => handleVote(1)}>
        <ThumbsUp className="thumbs-up" />
      </button>

      <button onClick={() => handleVote(-1)}>
        <ThumbsDown className="thumbs-up" />
      </button>
    </>
  );
}
