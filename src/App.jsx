import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./Auth/Auth";
import HelloWorld from "./HelloWorld";
const App = () => {
  const [logged, setLogged] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const decoded = JSON.parse(window.atob(accessToken.split(".")[1]));
      const { name, exp } = decoded;
      if (Date.now() < exp) {
        setName(name);
        setLogged(true);
      }
    }
  }, []);

  return (
    <>
      {!logged && <Auth />}
      {logged && <HelloWorld name={name} />}
    </>
  );
};

export default App;
