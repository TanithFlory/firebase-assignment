import { useState } from "react";
import useFireBase from "./useFireBase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./styles.scss";
import GoogleAuth from "./GoogleAuth";
import Form from "./Form";
const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const app = useFireBase();
  const auth = getAuth(app);

  const submitHandler = (e) => {
    e.preventDefault();
    setError(null);
    const emailRgx = /^[\w-._]+@([\w-]{3,}\.)+[\w-]{2,4}$/;

    if (!emailRgx.test(email)) {
      setError("Enter a valid Email");
      return;
    }

    createUserWithEmailAndPassword(auth, email.toLowerCase(), password)
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
        <h3>Create An Account</h3>
        <Form
          submitHandler={submitHandler}
          handleChange={handleChange}
          email={email}
          password={password}
        />
        {error && <h5>{error}</h5>}
      </div>
      <div>
        <GoogleAuth text="up" />
      </div>
    </div>
  );
};

export default Signup;
