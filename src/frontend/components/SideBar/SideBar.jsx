import "./SideBar.css";
import { filterContext } from "../../hooks/context/filterContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

export const SideBar = ({ toggleBtn, setToggleBtn }) => {
  const { setfilterDispatch, sort, rating, priceRange } =
    useContext(filterContext);

  const [searchParameter, setSearchParams] = useSearchParams();
  return (
    <>
      {
        <button
          className="reset-filter hide-resetfilter"
          onClick={() => setToggleBtn(!toggleBtn)}
        >
          Filters
        </button>
      }
      <div
        className={`sidebar-container ${
          toggleBtn ? "sidebar-container" : "hide-sidebar"
        }`}
      >
        <div className="filters">
          <h1>Filters</h1>
          {!searchParameter.size ? (
            <button
              className="reset-filter"
              onClick={() => {
                setSearchParams({});
                setfilterDispatch({ type: "RESET_ALL_FILTER" });
              }}
            >
              Reset
            </button>
          ) : (
            <button
              className="reset-filter"
              onClick={() => {
                setSearchParams({});
                setfilterDispatch({ type: "RESET_ALL_FILTER" });
                toast.success("Filter Removed", {
                  className: "toast-styling",
                  position: "top-left",
                  autoClose: 500,
                });
              }}
            >
              Reset
            </button>
          )}
        </div>

        <div
          className="rating-case"
          onClick={() => setSearchParams({ filter: "active" })}
        >
          <h3>Rating</h3>
          <label htmlFor="4&above">
            <input
              type="radio"
              id="4&above"
              checked={rating === "4"}
              value="4"
              onChange={(event) =>
                setfilterDispatch({
                  type: "RATINGS",
                  payload: event.target.value,
                })
              }
            />{" "}
            4 stars & above
          </label>

          <label htmlFor="3&above">
            <input
              type="radio"
              id="3&above"
              checked={rating === "3"}
              value="3"
              onChange={(event) =>
                setfilterDispatch({
                  type: "RATINGS",
                  payload: event.target.value,
                })
              }
            />{" "}
            3 stars & above
          </label>

          <label htmlFor="2&above">
            <input
              type="radio"
              id="2&above"
              checked={rating === "2"}
              value="2"
              onChange={(event) =>
                setfilterDispatch({
                  type: "RATINGS",
                  payload: event.target.value,
                })
              }
            />{" "}
            2 stars & above
          </label>

          <label htmlFor="1&above">
            <input
              type="radio"
              id="1&above"
              checked={rating === "1"}
              value="1"
              onChange={(event) =>
                setfilterDispatch({
                  type: "RATINGS",
                  payload: event.target.value,
                })
              }
            />{" "}
            1 stars & above
          </label>
        </div>

        <div
          className="price-sorting-case"
          onClick={() => setSearchParams({ filter: "active" })}
        >
          <h3>Sort By</h3>

          <label htmlFor="high-to-low">
            <input
              name="sort"
              type="radio"
              id="high-to-low"
              value="high_to_low"
              checked={sort === "high_to_low"}
              onChange={(event) =>
                setfilterDispatch({
                  type: "SORT_BY_PRICE",
                  payload: event.target.value,
                })
              }
            />
            Price High to Low
          </label>

          <label htmlFor="low-to-high">
            <input
              type="radio"
              id="low-to-high"
              value="low_to_high"
              checked={sort === "low_to_high"}
              onChange={(event) =>
                setfilterDispatch({
                  type: "SORT_BY_PRICE",
                  payload: event.target.value,
                })
              }
            />
            Price Low to High
          </label>
        </div>

        <div
          className="view-gift-case"
          onClick={() => setSearchParams({ filter: "active" })}
        >
          <button
            className="shining-button"
            onClick={() => setfilterDispatch({ type: "FILTER_GIFTS" })}
          >
            Look Towards Gifts 🎁 &raquo;
          </button>
        </div>
      </div>
      {/* )} */}
    </>
  );
};
