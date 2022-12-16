import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdDashboard, MdShoppingCart } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import logo from "../../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

const SideBar = ({ name, placement }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <HiMenuAlt2
        variant="primary"
        onClick={handleShow}
        className="ms-lg-5 ms-2"
        role="button"
      />
      <Offcanvas className="offcanvas_css" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo} alt="logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>{" "}
        <hr />
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <NavLink className="nav-link" to="/admin">
              <MdDashboard className="fs-4 mx-2" />
              Dashboard
            </NavLink>
            <NavLink to="/orders" className="nav-link" eventKey="link-1">
              <MdShoppingCart className="fs-4 mx-2" />
              Orders
            </NavLink>
            <NavLink to="/users" className="nav-link" eventKey="link-2">
              <FaUserAlt className="fs-4 mx-2" />
              Users
            </NavLink>
            <NavLink to="products" className="nav-link">
              <MdDashboard className="fs-4 mx-2" />
              Products
            </NavLink>
            <NavLink to="/abc" className="nav-link">
              <HiOutlineLogout className="fs-4 mx-2" />
              Products
            </NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideBar;
