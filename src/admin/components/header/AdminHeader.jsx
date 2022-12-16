import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/img/logo.png";
import SideBar from "./SideBar";
import "../header/adminnav.scss";
import { useState } from "react";
import SearchButton from "./SearchButton";

const AdminHeader = () => {
  const [show, setShow] = useState(false);

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="logo" />
          <SideBar
            style={{ marginLeft: "20px" }}
            placement="start"
            name="start"
          />
        </Navbar.Brand>
        <SearchButton show={show} setShow={setShow} />
      </Container>
    </Navbar>
  );
};

export default AdminHeader;
