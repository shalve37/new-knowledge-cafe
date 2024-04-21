import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Swal from "sweetalert2";
import { Outlet } from "react-router-dom";
function App() {
  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
  };
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddBookmark = (blog) => {
    if (!bookmarks.includes(blog)) {
      const newBookmark = [...bookmarks, blog];
      setBookmarks(newBookmark);
    } else {
      Swal.fire({
        icon: "error",
        title: "Sorry",
        text: "This blog is already bookmarked",
      });
    }
  };
  const handleRemoveBookmark = (blog) => {
    if (bookmarks.includes(blog)) {
      const remainingBookmarks = bookmarks.filter(
        (bookmark) => bookmark != blog
      );
      setBookmarks(remainingBookmarks);
    }
  };
  return (
    <div className="font-Poppins md:mx-10">
      <div className="md:flex my-10">
        <Blogs
          handleAddBookmark={handleAddBookmark}
          handleMarkAsRead={handleMarkAsRead}
          handleRemoveBookmark={handleRemoveBookmark}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
