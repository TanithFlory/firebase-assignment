import { useState } from "react";
import Google from "./Google.svg";
import useFireBase from "./useFireBase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleAuth = (props) => {
  const [error, setError] = useState();
  const app = useFireBase();
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        localStorage.setItem("accessToken", user.accessToken);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
     <>
      <div className="google-auth" onClick={signInWithGoogle}>
        <img src={Google} alt="Google" />
        <div>Sign {props.text} with Google</div>
      </div>
      {error && <h5>{error}</h5>}
    </>
  );
};

export default GoogleAuth;
