import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import Swal from "sweetalert2";
function App() {
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
  return (
    <div className="font-Poppins md:mx-10">
      <Header></Header>
      <div className="md:flex my-10">
        <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
