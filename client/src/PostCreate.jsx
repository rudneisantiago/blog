import { useContext, useState } from "react";
import axios from "axios";
import { appContext } from "./App";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const { setRefresh } = useContext(appContext);

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
    setRefresh((old) => old + 1);
  };

  return (
    <div>
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-12">
          <label className="form-label">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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

export default PostCreate;
