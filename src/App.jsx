import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./Components/Headers";
import Homepage from "./Components/Homepage";
import UpdateBlog from "./Components/UpdateBlog";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  return (
    <Router>
      <Headers />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Homepage blogs={blogs} />} />
          <Route path="/updateblog" element={<UpdateBlog setBlogs={setBlogs} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
