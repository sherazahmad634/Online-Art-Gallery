"use client";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginUser } from "../redux/stateManager/article/signInSlice";
import { useRouter } from "next/navigation";
import axios from "axios";
import {handleLogin} from "../redux/stateManager/article/signOutSlice"
import { login } from "../redux/stateManager/article/signOutSlice";

export default function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Dispatch the login action
    dispatch(login());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    axios
      .post("http://localhost:5555/user/login", data)
      .then((response) => {
        setIsLoggedIn(true); // Update authentication status
        router.push(`/?id=${response.data.user._id}`);
        // router.push(`/?id=${response.data.user._id}`);
        const userId = response.data.user._id;
        const token = response.data.token;
      })
      .catch((error) => {
        // alert("Login error");
      });

    router.push("/");
  };
  return (
    <>
      {/* <Header/> */}
      <div className="bg-neutral-700">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="ml-32 text-2xl font-extrabold text-white">
              ART GALLERY
            </div>
            <h2 className="sm:mx-auto sm:w-full sm:max-w-sm mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-text-white ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 focus:outline-none focus:border-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-orange-600 hover:text-orange-800"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 focus:outline-none focus:border-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* {isLoggedIn ? ( // Conditional rendering based on authentication status
                <button
                  className="flex w-full justify-center rounded-md bg-orange-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  onClick={() => router.push("/user-profile")} // Navigate to user profile on click
                >
                  User Profile
                </button>
              ) : ( */}
              <button
                onClick={handleLogin}
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Sign in
              </button>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-orange-600 hover:text-Orange-800"
              >
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
