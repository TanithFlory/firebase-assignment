import "./Form.scss";

const Form = (props) => {
  return (
    <form className="form" onSubmit={props.submitHandler}>
      <input
        onChange={props.handleChange}
        value={props.email}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={props.handleChange}
        value={props.password}
        type="password"
        placeholder="Password"
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
