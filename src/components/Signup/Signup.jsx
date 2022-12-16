import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../Login/login.scss";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
// bootstrap
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Header from "../Header/Header";

const Signup = () => {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputfield = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    setErrMessage("");
  };

  const sendData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, password } = user;
    if (!firstName || !lastName || !email || !password) {
      setErrMessage("please fill all fields");
    } else if (
      !user.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setErrMessage("Enter valid email");
    } else if (
      user.password.length < 8 ||
      !user.password.match(/[A-Z]/g) ||
      !user.password.match(/[a-z]/g) ||
      !user.password.match(/[0-9]/g)
    ) {
      setErrMessage("Password must contain first capital letter and ");
    } else {
      const result = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          password,
        }),
      });
      const data = await result.json();
      console.log(data, ">>>user added fronted");
      if (data === "user added") {
        navigate("/login");
      }
    }
  };
  const renderTooltip = (props) => (
    <Popover id="popover-basic" {...props}>
      <Popover.Header as="h3">Your password needs to: </Popover.Header>
      <Popover.Body className="mx-3">
        <p className="text-danger">first letter should be capital</p>
        <p className="text-danger">minimum 8 character password</p>
        <p className="text-danger">Include atleast one number</p>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <Header />
      <Form className="container form_container" method="POST">
        <h1 className="text-center mt-5">Create account</h1>
        <Form.Group className="my-4">
          <Form.Control
            className="p-2 rounded-0 input_field"
            type="text"
            placeholder="First name"
            name="firstName"
            value={user.firstName}
            onChange={handleInputfield}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Last name"
            name="lastName"
            value={user.lastName}
            onChange={handleInputfield}
            className="p-2 rounded-0 input_field"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleInputfield}
            className="p-2 rounded-0 input_field"
            required
          />
          <Form.Control
            type="text"
            placeholder="Phone"
            name="phone"
            value={user.phone}
            onChange={handleInputfield}
            className="mt-3 p-2 rounded-0 input_field"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <OverlayTrigger
            placement="top"
            overlay={renderTooltip}
            delay={{ show: 250, hide: 400 }}
          >
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInputfield}
              className="p-2 rounded-0 input_field"
              required
            />
          </OverlayTrigger>
        </Form.Group>

        <p className="text-danger">{errMessage}</p>
        <div className="d-flex justify-content-center">
          <Button
            variant="danger"
            className="rounded-0 py-2 px-4"
            type="submit"
            onClick={sendData}
          >
            sign up
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;
