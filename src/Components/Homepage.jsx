const Homepage = ({ blogs }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Blogs</h2>

      {blogs.length === 0 && (
        <p className="text-gray-500">No blogs yet. Add one from Update page.</p>
      )}

      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded shadow">
            <p>{blog}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
