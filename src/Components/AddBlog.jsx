import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddBlog = ({ setBlogs, blogs = [], isEdit = false }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit && blogs[id]) {
      setText(blogs[id]);
    }
  }, [isEdit, blogs, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    if (isEdit) {     
      const updated = [...blogs];
      updated[id] = text;
      setBlogs(updated);
    } else {
      setBlogs((prev) => [...prev, text]);
    }

    setText("");
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {isEdit ? "Edit Blog" : "Add a Blog"}
      </h2>

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
          className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isEdit ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
