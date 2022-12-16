// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart2 } from "react-icons/bs";
import "../Header/header.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
// import { useSelector } from "react-redux";
// import { useState } from "react";

// !cart page imports
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../Cart/cart.scss";
import { MdDelete } from "react-icons/md";
import { add, decrementQuantity, removeCartItem } from "../../store/cartSlice";
import { useState } from "react";
// Bootstrap
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
// !firebase

const Header = (props) => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState(null);
  // ! bootstrap
  // cart page
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //  !Redux function cart page
  const cartList = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeFromCart = (deleteId) => {
    dispatch(removeCartItem(deleteId));
  };
  const decrement = (item) => {
    dispatch(decrementQuantity(item));
  };
  const addToCart = (newItem, quantity) => {
    dispatch(add({ newItem, quantity }));
  };

  const items = useSelector((state) => state.cart);

  // logout function
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.clear();
  };

  useEffect(() => {
    const userName = localStorage.getItem("username");
    setUsername(userName);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      setUsername(user.name);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, []);

  return (
    <>
      <Navbar bg="light" expand="md" className="overflow-hidden">
        <Container fluid>
          <Link className="nav-link brand" to="/">
            <img src={logo} alt="" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <NavLink className="nav-link" to="/">
                Shop
              </NavLink>
              <NavLink className="nav-link" to="/no">
                About Us
              </NavLink>
              <NavLink className="nav-link" to="/ok">
                Our Stores
              </NavLink>
              <NavLink className="nav-link" to="/oky">
                Contact Us
              </NavLink>
            </Nav>
            <Nav style={{ marginLeft: "8px" }}>
              <NavLink
                className="nav-link text-success"
                to="/login"
                onClick={logOut}
              >
                {userName ? `Logout` : "Login"}
              </NavLink>

              <div className="postion-relative nav-link">
                <BsCart2
                  role="button"
                  className="position-relative fs-5"
                  onClick={handleShow}
                />
                {items.totalQuantity > 0 ? (
                  <span className="position-absolute translate-middle badge rounded-circle bg-danger">
                    {items.totalQuantity}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* {show ? <Cart show={show} setShow={setShow} /> : ""} */}

      {/* !cart modal */}

      <div className="modal_container">
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="p-3"
        >
          <Modal.Header closeButton className="pb-2">
            <Offcanvas.Title className="fs-4">Your cart</Offcanvas.Title>
            <br />
          </Modal.Header>
          <div className="d-flex justify-content-between border-bottom m-0">
            <p className="text-muted">Product</p>
            <p className="text-muted">Total</p>
          </div>
          {cartList < 1 ? (
            <Modal.Body className="d-flex align-items-center flex-column mx-5 mt-4">
              <h3>Your cart is empty</h3>
              <button className="btn btn-danger"> Continue shopping</button>
            </Modal.Body>
          ) : (
            ""
          )}
          <Modal.Body className="p-2">
            <div className="cart_container">
              <div
                className="d-flex align-items-center flex-column overflow-auto overflow_scroll"
                style={{ height: "65vh" }}
              >
                {cartList.map((item, index) => {
                  // console.log(item.quantity, "item in cart");
                  return (
                    <Card
                      key={index}
                      className="cart_card d-flex flex-row mb-2 cart_list border-0"
                    >
                      <Card.Body className="d-flex w-100">
                        <Card.Img
                          className="cart_item_img"
                          variant="top"
                          src={item.newItem.image_src}
                        />
                        <div className="d-flex justify-content-between w-100">
                          <div className="px-3">
                            <p className="m-0">{item.newItem.name}</p>
                            <p className="text-muted m-0  ">
                              Rs. {item.newItem.price}
                            </p>
                            <div className="quantity_btn">
                              <button onClick={() => decrement(item.newItem)}>
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() => addToCart(item.newItem, 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="ml-auto">
                            <p>Rs. {item.quantity * item.newItem.price}</p>
                            <br />
                            <MdDelete
                              onClick={() => removeFromCart(item.newItem.id)}
                              className="fs-3 text-danger"
                              role="button"
                            />
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bootstrap_modal_footer">
            {cartList.length > 0 ? (
              <div className="checkout_section">
                <div className="d-flex justify-content-between alig">
                  <h6 className="text-muted">Subtotal</h6>
                  <p className="text-muted">
                    Rs.{" "}
                    {cartList.reduce(
                      (total, item) =>
                        total + item.newItem.price * item.quantity,
                      0
                    )}
                  </p>
                </div>
                <p className="text-muted m-0">
                  Tax included and shipping calculated at checkout
                </p>
                <Link
                  to="/checkout"
                  className="btn btn-danger w-100 rounded-0"
                  onClick={() => setShow(!show)}
                >
                  Check out
                </Link>
              </div>
            ) : (
              ""
            )}
          </Modal.Footer>
        </Offcanvas>
      </div>
    </>
  );
};

export default Header;
