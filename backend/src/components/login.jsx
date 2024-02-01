import { MdOutlineEmail } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

// login box

export const LoginBox = (props) => {
  const { setSignUp = false } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // show password

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const url = "http://localhost:4000/users/login";
  const handleClick = () => {
    axios
      .post(url, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div
      className={`w-fit bg-gray-200 flex flex-col gap-4 p-4  rounded-xl ${
        setSignUp ? "hidden" : "flex"
      }`}
    >
      <h2 className="text-2xl text-black font-bold">Login</h2>
      <h2>Please sign in to continue</h2>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          className="w-[400px] rounded-md h-10 px-3"
          onChange={handleEmail}
          value={email}
        ></input>
      </div>
      <div className="flex flex-col relative">
        <label>Password</label>
        <input
          className="w-[400px] rounded-md h-10 px-3"
          type={`${showPassword ? "text" : "password"}`}
          onChange={handlePassword}
          value={password}
        ></input>
        <FaRegEyeSlash
          className="absolute right-4 bottom-3 cursor-pointer"
          onClick={handleShowPassword}
          style={{ display: `${showPassword ? "none" : "block"}` }}
        />
        <FaRegEye
          className="absolute right-4 bottom-3 cursor-pointer"
          onClick={handleShowPassword}
          style={{ display: `${showPassword ? "block" : "none"}` }}
        />
      </div>
      <div className="flex justify-between w-[400px]">
        <button
          className="bg-green-500 px-4 py-2 text-white rounded-xl"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};
