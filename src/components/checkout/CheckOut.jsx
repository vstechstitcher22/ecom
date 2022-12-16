import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useState } from "react";

const CheckOut = () => {
  const cartList = useSelector((state) => state.cart.items);
  // ! code of get value from checkout form
  const [deliveryAddress, setDeliveryAddress] = useState({
    email: "",
    deliveryMethod: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pinCode: "",
    mobile: "",
    productInfo: cartList,
  });

  const handleInput = (event) => {
    setDeliveryAddress({
      ...deliveryAddress,
      [event.target.name]: event.target.value,
    });
  };

  // ! submit address data on firebase
  const saveAddress = async (e) => {
    e.preventDefault();
    const {
      email,
      firstName,
      lastName,
      address,
      apartment,
      city,
      state,
      pinCode,
      mobile,
      productInfo,
    } = deliveryAddress;
    alert("submitted");
    let result = await fetch("http://localhost:8000/checkout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        address,
        apartment,
        city,
        state,
        pinCode,
        mobile,
        productInfo,
      }),
    });
    let data = await result.json();
    console.log(data);
  };

  return (
    <div className="overflow-hidden">
      <Row>
        <Col md={6}>
          <Form className="mt-4 container px-lg-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-5">Contact information</Form.Label>
              <Form.Control
                value={deliveryAddress.email}
                onChange={handleInput}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fs-5">Delivery method</Form.Label>
              <div key={`reverse-radio`} className="mb-3">
                <Form.Check
                  label="Pick up from store"
                  name="group1"
                  type="radio"
                  id={`reverse-radio-1`}
                  onChange
                />
                <Form.Check
                  label="Shipping"
                  name="group1"
                  type="radio"
                  id={`reverse-radio-2`}
                />
              </div>
            </Form.Group> */}

            <Form.Group>
              <Form.Label className="fs-5">Shipping address </Form.Label>
              <Row>
                <Col md={6}>
                  {" "}
                  <Form.Control
                    value={deliveryAddress.firstName}
                    onChange={handleInput}
                    name="firstName"
                    type="text"
                    placeholder="Enter First Name"
                    className="mb-2"
                  />
                </Col>
                <Col md={6}>
                  {" "}
                  <Form.Control
                    value={deliveryAddress.lastName}
                    onChange={handleInput}
                    name="lastName"
                    type="text"
                    placeholder="Enter Last Name"
                  />
                </Col>
              </Row>
              <Form.Control
                value={deliveryAddress.address}
                onChange={handleInput}
                name="address"
                type="text"
                placeholder="Address"
                className="mt-2"
              />
              <Form.Control
                value={deliveryAddress.apartment}
                onChange={handleInput}
                name="apartment"
                type="text"
                placeholder="Apartment, suite, etc (optional)"
                className="mt-2"
              />

              <Row className="d-flex align-items-center">
                <Col md={4}>
                  <Form.Control
                    value={deliveryAddress.city}
                    onChange={handleInput}
                    name="city"
                    type="text"
                    placeholder="City"
                    className="mt-2"
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    value={deliveryAddress.state}
                    onChange={handleInput}
                    name="state"
                    type="text"
                    placeholder="State"
                    className="mt-2"
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    value={deliveryAddress.pinCode}
                    onChange={handleInput}
                    name="pinCode"
                    type="text"
                    placeholder="PIN code"
                    className="mt-2"
                  />
                </Col>
              </Row>
              <Form.Control
                value={deliveryAddress.mobile}
                onChange={handleInput}
                name="mobile"
                type="email"
                placeholder="Phone"
                className="mt-2"
              />
            </Form.Group>

            <div className="d-flex justify-content-between mt-4 align-items-center">
              <div className="back_btn">
                <Link
                  to="/"
                  className="nav-link d-flex align-items-center text-primary"
                >
                  <AiOutlineLeft className="fs-6" />
                  Return to cart
                </Link>
              </div>
              <Button
                variant="primary"
                type="submit"
                className="px-3 py-2"
                onClick={saveAddress}
              >
                Continue to shopping
              </Button>
            </div>
          </Form>
        </Col>

        {/* checkout cart system  */}
        <Col md={6} style={{ background: "#fafafa" }}>
          <div className="cart_container px-md-2 px-4 mt-4">
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
                    <Card.Body className="d-flex justify-content-between w-100 align-items-center">
                      <Card.Img
                        className="cart_item_img rounded-0"
                        variant="top"
                        src={item.newItem.image_src}
                      />
                      <div className="">
                        <p>{item.newItem.name}</p>
                      </div>
                      <div className="ml-auto p-3">
                        <p>Rs. {item.quantity * item.newItem.price}</p>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
          <Modal.Footer className="bootstrap_modal_footer px-md-2 px-4 mt-4">
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
              </div>
            ) : (
              ""
            )}
          </Modal.Footer>
        </Col>
      </Row>
    </div>
  );
};
export default CheckOut;
