import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({
  blog,
  handleAddBookmark,
  handleMarkAsRead,
  handleRemoveBookmark,
}) => {
  const { title, image, author, posted_date, author_img, duration, hashtags } =
    blog;
  return (
    <div className=" px-5 mb-16">
      <img className="rounded-lg mb-5" src={image} alt="" />
      <div className="flex justify-between items-center pb-5">
        <div className="flex items-center gap-2 ">
          <img className="md:w-12 w-10 rounded-full" src={author_img} alt="" />
          <div>
            <h3 className="font-bold md:text-base text-sm">{author}</h3>
            <p className="font-semibold text-gray-400 md:text-base text-sm ">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="font-semibold text-gray-400 md:text-base text-sm">
            {duration} min ago
          </p>
          <button
            onClick={() => handleAddBookmark(blog)}
            className="font-extrabold text-gray-400 text-3xl hover:text-gray-600"
          >
            <CiBookmark />
          </button>
        </div>
      </div>
      <h1 className="md:text-4xl text-3xl font-bold pb-5">{title}</h1>
      <p>
        {hashtags.map((hashtag, i) => (
          <span
            className="mr-2 font-semibold text-gray-400 md:text-base text-sm "
            key={i}
          >
            #{hashtag}
          </span>
        ))}
      </p>
      <button
        onClick={() => {
          handleMarkAsRead(duration);
          handleRemoveBookmark(blog);
        }}
        className="block py-10 text-blue-600 font-semibold underline"
        href=""
      >
        Mark as read
      </button>
      <hr />
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object,
  handleAddBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
  handleRemoveBookmark: PropTypes.func,
};
export default Blog;
