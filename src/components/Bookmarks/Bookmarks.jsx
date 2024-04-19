import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 md:mx-0 mx-5">
      <h2 className="text-xl font-semibold text-center text-blue-600 bg-gray-200 p-5 rounded-lg border border-blue-600 mb-4">
        Spent time on read: {readingTime}
      </h2>
      <div className="bg-gray-200 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        <div>
          {bookmarks.map((bookmark, i) => (
            <Bookmark key={i} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
