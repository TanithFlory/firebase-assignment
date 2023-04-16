const HelloWorld = (props) => {
  const currentTime = new Date().getHours();
  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };
  return (
    <>
      <h1>Hello World!</h1>
      <h3>
        {currentTime < 12
          ? "Good Morning"
          : currentTime < 16
          ? "Good Afternoon"
          : currentTime < 24
          ? "Good Evening"
          : "Hello,"}{" "}
        {props?.name}!
      </h3>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default HelloWorld;
