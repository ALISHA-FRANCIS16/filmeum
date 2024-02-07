import { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../context";
import { getImageUrl } from "../utils/cine-utility";

export function MovieDetailsModal({ movie, onClose }) {
  const { state, dispatch } = useContext(CartContext);

  return (
    <>
      <div
        className="onClose fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm"
        onClick={(e) => {
          e.preventDefault();
          if (e.target.className.includes("onClose")) {
            onClose();
          }
        }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
          <div className="bg-white shadow-md dark:bg-[#101011] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
            <img
              className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
              src={getImageUrl(movie.cover)}
              alt=""
            />
            <div className="p-5 lg:p-11">
              <div className="">
                <h2 className="text-3xl leading-10 lg:text-[50px] mb-2 font-bold">
                  {movie.title}
                </h2>
                <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">
                  {movie.genre}
                </span>
                <div></div>
              </div>
              <p className="text-sm lg:text-base mb-8 lg:mb-16">
                {movie.description}
              </p>
              <div className="grid lg:grid-cols-2 gap-2">
                <a
                  className="bg-primary rounded-md py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();

                    const found = state.cartData.find(
                      (item) => item.id === movie.id
                    );

                    if (!found) {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: {
                          ...movie,
                        },
                      });
                      toast.success(`${movie.title} added to cart`, {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                      });
                    } else {
                      toast.warning(`${movie.title} already exists in cart`, {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                      });
                    }
                  }}
                >
                  <img src="./assets/tag.svg" alt="" />
                  <span>${movie.price} | Add to Cart</span>
                </a>
                <a
                  className="border border-[#74766F] rounded-md py-2 px-5 flex items-center justify-center cursor-pointer gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
