import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./PostSlice";

const ReactionEmojis = {
  thumbsUp: "👍🏻",
  wow: "🤩",
  heart: "❤",
  rocket: "🚀",
  coffee: "☕",
};
const Reactionbtns = ({ data }) => {
  const dispatch = useDispatch();
  const reactionbuttons = Object.entries(ReactionEmojis).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          onClick={() =>
            dispatch(reactionAdded({ postId: data.id, reaction:name }))
          }
        >
          {emoji} {data.reaction[name]}
        </button>
      );
    }
  );
  return (
    <>
      <div>{reactionbuttons}</div>
    </>
  );
};

export default Reactionbtns;
