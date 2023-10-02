import axios from "axios";
import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div className="col-12 col-sm-6 col-md-4 mb-4" key={post.id}>
        <div className="card">
          <div className="card-body">
            <h3>{post.title}</h3>
            <CommentList postId={post.id} />
            <CommentCreate postId={post.id} />
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{renderedPosts}</div>;
};

export default PostList;
