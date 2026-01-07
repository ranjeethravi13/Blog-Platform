import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">My Blog</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/addblog" className="hover:underline">Add</Link>
      </nav>
    </header>
  );
};

export default Headers;
