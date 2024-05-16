import React from "react";
import { useSelector } from "react-redux";
import { SelectAllPost } from "./PostSlice";
import TimeAge from "./TimeAge";
import { reverse } from "lodash";
import Reactionbtns from "./Reactionbtns";


const ShowPost = () => {
  const posts = useSelector(SelectAllPost);
  const renderPosts = posts.map((data) => (
    <div
      key={data.id}
      className="my-2 row-bd  text-start p-3 "
    >
      <h6>{data.title}</h6>
      <p>By {data.author} - <TimeAge timeStamp={data.date}/></p>
      <p>{data.content.substring(0,200)}</p>
      {/* <Reactionbtns/> */}
    </div>
  ));
  const Orderedposts = reverse(renderPosts)

  return (
    <div className="py-5">
      <h3>Latest Posts :</h3>
      <div className="row pt-3">{Orderedposts}</div>
    </div>
  );
};

export default ShowPost;
