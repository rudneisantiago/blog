import { useContext, useState } from "react";
import axios from "axios";
import { appContext } from "./App";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");
  const { setRefresh } = useContext(appContext);

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent("");
    setRefresh((old) => old + 1);
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
