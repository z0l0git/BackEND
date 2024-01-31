export const LoginBox = (props) => {
  return (
    <div className="w-fit bg-gray-500 flex flex-col gap-4 p-4 items-center rounded-xl">
      <h2 className="text-2xl text-white font-bolder">Login</h2>
      <div className="flex flex-col">
        <label>Username</label>
        <input className="w-[400px]"></input>
      </div>
      <div className="flex flex-col">
        <label>Password</label>
        <input className="w-[400px]"></input>
      </div>
      <div className="flex justify-between w-[400px]">
        <p className="text-white text-m cursor-pointer">Create user</p>
        <button className="bg-green-500 px-4 py-2 text-white rounded-xl">
          Login
        </button>
      </div>
    </div>
  );
};
