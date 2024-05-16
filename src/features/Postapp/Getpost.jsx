import React, { useState } from "react";
import ShowPost from "./ShowPost";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./PostSlice";
import { Selectallusers } from "../Users/Userslice";

const Getpost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const Author = useSelector(Selectallusers);
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const disablebtn = Boolean(title && content && author);

  const PostSubmit = (event) => {
    event.preventDefault();


    if (title && content) {
      dispatch(
        postAdded(title,content,author)
      );
    }
    
    setTitle("");
    setContent("");
    setAuthor("");
    console.log(title, content, author);
  };

  return (
    <div className="container">
    <div className="pt-5 row">
      <div className="col-md-6 text-start">
      <h2 className="text-start">Add New Post here :</h2>
      <input
        type="text"
        placeholder="Add your title here"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="mt-3"
      />

      <br />

      <select
        className="mt-3"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option> --Select-- </option>
        {Author.map((data) => (
          <option key={data.id} value={data.author}>
            {data.author}
          </option>
        ))}
      </select>

      <br />

      <textarea
        placeholder="Enter content here"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        className="mt-3"
      />

      <br />

      <button
        className="btn btn-submit"
        disabled={!disablebtn}
        onClick={PostSubmit}
      >
        Add Post
      </button>
      </div>

      <ShowPost></ShowPost>
    </div>
    </div>
  );
};

export default Getpost;
