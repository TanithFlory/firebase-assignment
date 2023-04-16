import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import GoogleAuth from "./GoogleAuth";
import useFireBase from "./useFireBase";
import { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const app = useFireBase();
  const auth = getAuth(app);

  const submitHandler = (e) => {
    e.preventDefault();
    setError(null);
    signInWithEmailAndPassword(auth, email.toLowerCase(), password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("accessToken", user.accessToken);
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleChange = (e) => {
    if (e.target.placeholder === "Email") {
      setEmail(e.target.value);
    } else setPassword(e.target.value);
  };

  return (
    <div className="signup-wrapper">
      <div>
        <h3>Sign In</h3>
        <Form
          submitHandler={submitHandler}
          handleChange={handleChange}
          email={email}
          password={password}
        />
        {error && <h5>{error}</h5>}
      </div>
      <div>
        <GoogleAuth text="in" />
      </div>
    </div>
  );
};

export default Login;
