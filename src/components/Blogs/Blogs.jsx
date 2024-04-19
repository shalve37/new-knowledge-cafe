import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({
  handleAddBookmark,
  handleMarkAsRead,
  handleRemoveBookmark,
}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddBookmark={handleAddBookmark}
          handleMarkAsRead={handleMarkAsRead}
          handleRemoveBookmark={handleRemoveBookmark}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
  handleRemoveBookmark: PropTypes.func,
};
export default Blogs;
