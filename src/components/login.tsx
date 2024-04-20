import { useState } from "react";

const login = ({ onClose }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClose = (e: any) => {
    if (e.target.id === "big-div" || e.target.id === "close") onClose("none");
    else if (e.target.id === "form") onClose("register");
  };
  return (
    <div
      id="big-div"
      className="fixed inset-0 flex bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center"
      onClick={handleClose}
    >
      <div className="flex flex-col p-20 items-center justify-center bg-slate-400 gap-6 border-2 border-red-500 rounded-lg relative">
        <p className="text-2xl font-bold">Sign Up with your account</p>
        <form onSubmit={() => console.log("submit")}>
          <div className="flex flex-col gap-4 items-center">
            <input
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-2 py-4 border-2 border-black rounded-md"
            />
            <input
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-2 py-4 border-2 border-black rounded-md "
            />
            <button
              className="px-2 py-2 border-2 border-black text-white bg-black rounded-md"
              type="submit"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
        <div>
          <span>Need an Account? </span>
          <span
            id="form"
            className="text-blue-600 cursor-pointer"
            onClick={handleClose}
          >
            Register
          </span>
        </div>
        <button
          id="close"
          className="absolute top-5 right-5 cursor-pointer"
          onClick={handleClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default login;
