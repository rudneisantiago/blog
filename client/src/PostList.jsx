import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { appContext } from "./App";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});
  const { refresh } = useContext(appContext);

  const fetchPosts = async () => {
    const res = await axios.get("http://posts.com/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, [refresh]);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div className="col-12 col-sm-6 col-md-4 mb-4" key={post.id}>
        <div className="card">
          <div className="card-body">
            <h3>{post.title}</h3>
            <CommentList comments={post.comments} />
            <CommentCreate postId={post.id} />
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{renderedPosts}</div>;
};

export default PostList;
