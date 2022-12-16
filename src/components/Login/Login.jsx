import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Login/login.scss";
import { Navigate } from "react-router-dom";
import Header from "../Header/Header";

const Login = (props) => {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");
  const [bErrMsg, setbErrMsg] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputfield = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    setErrMessage("");
  };
  // login
  const loginFun = async (event) => {
    event.preventDefault();
    const { email, password } = user;
    if (!email && !password) {
      setErrMessage("please fill all fields");
      return;
    }
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    let data = await res.json();
    console.log(data, "data");
    setbErrMsg(data.message);
    if (data.errors) {
      console.log("error", data.errors);
      console.log("error", data.errors[0].msg);
      alert("error found");
    } else if (data.user) {
      alert("login successful");
      localStorage.setItem("token", data.user);
      navigate("/");
    } else {
      alert("please check your email and password");
    }
  };

  if (props.userName) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <>
      <Header />
      <Form className="container form_container" onSubmit={loginFun}>
        <h1 className="text-center mt-5">Login</h1>
        <Form.Group className="my-4" controlId="">
          <Form.Control
            className="p-2 rounded-0 input_field"
            type="email"
            placeholder="Email"
            value={user.email}
            name="email"
            onChange={handleInputfield}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            className="p-2 rounded-0 input_field"
            value={user.password}
            name="password"
            onChange={handleInputfield}
          />
        </Form.Group>
        <p className="text-danger">{errMessage}</p>
        <Form.Group className="mb-4">
          <Link to="#" className="text-dark">
            Forgot your password ?
          </Link>
        </Form.Group>
        <div className="d-flex justify-content-center flex-column">
          <Button
            variant="danger"
            className="rounded-0 py-2 px-4"
            type="submit"
          >
            log in
          </Button>
          <Link className="text-center text-muted mt-3" to="/signup">
            Create account
          </Link>
          <p>{bErrMsg}</p>
        </div>
      </Form>
    </>
  );
};

export default Login;
