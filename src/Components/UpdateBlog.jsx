import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateBlog = ({ setBlogs }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    setBlogs((prev) => [...prev, text]);
    setText("");
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add a Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-3 border rounded"
          rows="5"
          placeholder="Write your blog here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
