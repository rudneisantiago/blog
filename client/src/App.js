import { createContext, useState } from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export const appContext = createContext();
function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="container">
      <appContext.Provider value={{ refresh, setRefresh }}>
        <h1>Create Post</h1>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostList />
      </appContext.Provider>
    </div>
  );
}

export default App;
