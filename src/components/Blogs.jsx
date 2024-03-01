import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = () => {
  const {loading, posts} = useContext(AppContext);

  return (
    <div>
      {loading ? (
       ( <Spinner />)
      ) : posts.length === 0 ? (
        <div>
          <p>No Blog found</p>
        </div>
      ) : (
        <div>
            {
                posts.map((post)=>(<Card key={post.id} post={post}/>))
            }
        </div>
      )}
    </div>
  );
};

export default Blogs;
