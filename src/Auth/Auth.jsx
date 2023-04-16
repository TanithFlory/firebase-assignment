import { useState } from "react";
import Signup from "./Authentications/Signup";
import Login from "./Authentications/Login";
const Auth = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle && <Login />}
      {!toggle && <Signup />}
      <button
        onClick={() =>
          setToggle((prevState) => {
            return !prevState;
          })
        }
      >
        {toggle ? "Signup" : "Login"}
      </button>
    </>
  );
};

export default Auth;
