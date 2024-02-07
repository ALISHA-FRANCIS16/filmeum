import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", email, password);
    // You can perform further actions like sending login data to a server, etc.
  };

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto cursor-pointer">
      <div className="bg-white shadow-md dark:bg-[#101011] rounded-2xl overflow-hidden p-5 md:p-9">
        <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block mb-2 text-[#575A6E]">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-[#575A6E]">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="rounded-md px-6 py-3 bg-primary text-white text-sm font-semibold"
            >
              Login
            </button>
            <a
              href="#"
              className="text-[#74766F] dark:text-gray-200 text-sm font-semibold"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <div className="flex items-center justify-center">
          <p className="text-[#575A6E]">Don't have an account?</p>
          <a
            href="#"
            className="text-primary ml-2 text-sm font-semibold dark:text-gray-200"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
