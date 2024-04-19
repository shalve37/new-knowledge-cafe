import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import Swal from "sweetalert2";
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
  const handleRemoveBookmark = (blog) =>{
    console.log('removed bookmark')
  }
  return (
    <div className="font-Poppins md:mx-10">
      <Header></Header>
      <div className="md:flex my-10">
        <Blogs
          handleAddBookmark={handleAddBookmark}
          handleMarkAsRead={handleMarkAsRead}
          handleRemoveBookmark={handleRemoveBookmark}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
