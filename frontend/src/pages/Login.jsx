import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Handle form submission logic here (e.g., send data to server)
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <div className="lg:grid lg:grid-cols-2 flex justify-start items-start flex-wrap">
      <div className="w-full lg:h-[100vh] p-4">
        <img
          className="text-center text-black bg-red flex justify-center items-center h-auto mx-auto w-[500px] rounded-3xl lg:shadow-2xl shadow-md"
          src="/assets/LOGIN.jpg"
          alt="LOGO"
        />
      </div>
      <div className="w-full lg:h-[100vh] p-4">
        <h1 className="text-center bg-red flex justify-center items-center text-4xl">
          Foodify
        </h1>
        <form
          onSubmit={handleSubmit}
          className="text-black py-8 px-4 rounded-lg shadow-lg sm:px-6 md:px-8 text-center w-[80%] mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-black"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-auto lg:w-[70%]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:w-[70%]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline lg:w-[70%]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
