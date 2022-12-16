import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "../Productinfo/productview.scss";
import { add } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";

const ProductView = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const cartData = useSelector((state) => state.cart.items);

  const [quantity, setQuantity] = useState(1);
  const param = useParams();
  const [apiData, setApiData] = useState([]);
  const param_id = param.id;

  const fetchData = async () => {
    return fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      });
  };

  // ! Add to cart function
  const addToCart = (newItem, quantity) => {
    // console.log(quantity, "quantity in product view");
    // setCartItems({...cartItems,  newItem }]);
    dispatch(add({ newItem, quantity }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!localStorage.getItem("token")) {
    return navigate("/login");
  }
  return (
    <>
      <Header />
      <Container fluid className="mt-4">
        {apiData
          .filter((ele) => ele.id === Number(param_id))
          .map((res) => {
            return (
              <div key={res.id}>
                <Row>
                  <Col sm={6}>
                    <img style={{ width: "100%" }} src={res.image_src} alt="" />
                  </Col>
                  <Col sm={6}>
                    <h1 className="productview_title">{res.name}</h1>
                    <p className="fs-5 productview_price">
                      {" "}
                      <span className="text-muted text-decoration-line-through">
                        $ {res.compare_at_price}
                      </span>{" "}
                      <span>$ {res.price}</span>
                      <span className="sale_btn rounded-pill py-1 px-2 btn btn-dark">
                        Sale
                      </span>
                      <br />
                      <span className="text-muted">Tax included.</span>
                    </p>
                    <div className="btn_section">
                      <h6 className="text-muted">Quantity</h6>
                      <div className="quantity_btn">
                        <button
                          onClick={() => {
                            if (quantity === 1) {
                              return;
                            }
                            setQuantity(quantity - 1);
                          }}
                        >
                          -
                        </button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>
                          +
                        </button>
                      </div>
                      <button
                        className="mt-4 rounded-0 py-2 btn border border-dark w-100"
                        onClick={() => addToCart(res, quantity)}
                      >
                        Add to cart
                      </button>
                      <button className="mt-2 rounded-0 py-2 btn btn-danger w-100">
                        Buy it now
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
      </Container>
    </>
  );
};
export default ProductView;
