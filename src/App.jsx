import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./Components/Headers";
import Homepage from "./Components/Homepage";
import AddBlog from "./Components/AddBlog";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const deleteItem = (blog) => {
    setBlogs(blogs.filter(data=> data != blog));
  }

  return (
    <Router>
      <Headers />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Homepage blogs={blogs} deleteItem={deleteItem} />} />
          <Route path="/addblog" element={<AddBlog setBlogs={setBlogs} />} />
          <Route path="/edit/:id" element={<AddBlog setBlogs={setBlogs} blogs={blogs} isEdit={true} />} />
        </Routes>        
      </div>
    </Router>
  );
};

export default App;
