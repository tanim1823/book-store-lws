import { useSelector, useDispatch } from "react-redux";
import { statusChanged } from "../../../redux/filters/actions";
const Filter = () => {
  const status = useSelector((state) => state.filter.status);
  const dispatch = useDispatch();
  const handleClick = (status) => {
    dispatch(statusChanged(status));
  };
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn ${status === "all" && "active-filter"}`}
          id="lws-filterAll"
          onClick={() => handleClick("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${status === "featured" && "active-filter"}`}
          id="lws-filterFeatured"
          onClick={() => handleClick("featured")}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default Filter;
