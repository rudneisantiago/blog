import { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="row gap-3">
        <div className="col-12">
          <label className="form-label">New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CommentCreate;
