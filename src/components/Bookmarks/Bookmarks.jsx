import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 ">
      <div className="bg-gray-200 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
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
};
export default Bookmarks;
