import { useContext, useState, useEffect } from "react";
import Moon from "./assets/icons/moon.svg";
import Sun from "./assets/icons/sun.svg";
import Logo from "./assets/icons/logo.png";
import Login from "./assets/icons/login.png";
import Ring from "./assets/ring.svg";
import Cart from "./assets/shopping-cart.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartDetails } from "./cine/CartDetails";
import { CartContext, ThemeContext } from "./context";
import LoginPage from "./cine/LoginForm";

export function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false); // State to control the visibility of the login form

  const { state } = useContext(CartContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // Set light mode as default when component mounts
  useEffect(() => {
    setDarkMode(true);
  }, []);

  function handleCartShow() {
    setShowCart(true);
  }

  function handleRingClick() {
    toast.info("No new notifications"); // Displaying "No new notifications" when the ring icon is clicked
  }

  function handleLoginClick() {
    setShowLoginForm(true); // Display the login form when the login button is clicked
  }

  return (
    <>
      <ToastContainer />
      <header className="fixed w-full h-[12%] dark:bg-black bg-white shadow-lg">
        {showCart && (
          <CartDetails
            onClose={() => {
              setShowCart(false);
            }}
          />
        )}
        <nav className="container flex items-center justify-between space-x-10 py-2">
          <a href="">
            <img src={Logo} width="139" height="26" alt="Logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-md backdrop-blur-[2px] p-1 inline-block cursor-pointer"
                onClick={handleRingClick}
              >
                <img src={Ring} width="24" height="24" alt="Ring" />
              </a>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                setDarkMode(!darkMode);
              }}
            >
              <a className="bg-primary/20 dark:bg-primary/[7%] rounded-md backdrop-blur-[2px] p-1 inline-block cursor-pointer">
                {darkMode ? (
                  <img src={Sun} width="24" height="24" alt="Sun" />
                ) : (
                  <img src={Moon} width="24" height="24" alt="Moon" />
                )}
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-md backdrop-blur-[2px] p-1 inline-block cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleCartShow();
                }}
              >
                <img src={Cart} width="24" height="24" alt="Cart" />

                {state.cartData.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-[#171923] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
            <li>
              <a
                className="p-1 inline-block cursor-pointer"
                onClick={handleLoginClick}
              >
                <img src={Login} width="24" height="24" alt="login" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {showLoginForm && <LoginPage />}{" "}
      {/* Render the login form if showLoginForm is true */}
    </>
  );
}
