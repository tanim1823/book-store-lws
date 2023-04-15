import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import addBook from "../../redux/books/thunk/addBook";
import { form } from "../../redux/filters/actions";
import updateBook from "../../redux/books/thunk/updateBook";
const initState = {
  name: "",
  author: "",
  thumbnail: "",
  price: "",
  rating: "",
  featured: "",
};
//{
//   name: "Slow Horses (Deluxe Edition)",
//   author: "Mick Herron",
//   thumbnail:
//     "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
//   price: 14,
//   rating: 3,
//   featured: false,
// };
const Form = () => {
  const [state, setState] = useState({ ...initState });
  const formInfo = useSelector((state) => state.filter.form);
  const dispatch = useDispatch();
  useEffect(() => {
    if (formInfo.status === "edit") {
      setState({ ...formInfo.updatedData });
    }
  }, [formInfo.status]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => {
      if (name == "featured") {
        return {
          ...prev,
          featured: !prev.featured,
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    state.id = nanoid();
    dispatch(addBook(state));
    setState(initState);
    dispatch(form("created"));
  };
  const handleUpdate = () => {
    setState({ ...state, id: formInfo.id });
    dispatch(updateBook(state));
    dispatch(form("created"));
    setState(initState);
  };
  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              value={state.name}
              onChange={handleChange}
              type="text"
              id="input-Bookname"
              name="name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={state.author}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={state.thumbnail}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                min="1"
                value={state.price}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={state.rating}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={state.featured}
              onChange={handleChange}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              This is a featured book{" "}
            </label>
          </div>
          {formInfo.status == "created" ? (
            <button type="submit" className="submit" id="submit">
              Add Book
            </button>
          ) : (
            <button className="update" onClick={handleUpdate}>
              Update book
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
