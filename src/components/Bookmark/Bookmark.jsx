import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  return (
    <div>
      <h4 className="text-xl font-semibold p-6 bg-white rounded-lg mt-5">{bookmark.title}</h4>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
