import { useState } from "react";
import Signup from "./Authentications/Signup";
import Login from "./Authentications/Login";
const Auth = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle && <Login />}
      {!toggle && <Signup />}
     <div className="toggle-auth">
        <h3>{toggle?"Don't have an account?":"Already have an account?"}</h3>
      <button
        onClick={() =>
          setToggle((prevState) => {
            return !prevState;
          })
        }
      >
        {toggle ? "Signup" : "Login"}
      </button>
     </div>
    </>
  );
};

export default Auth;
