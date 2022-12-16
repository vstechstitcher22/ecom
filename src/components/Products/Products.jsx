import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "../Products/products.scss";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Header from "../Header/Header";

const Products = () => {
  const [apiData, setApiData] = useState([]);
  const [allApiData, setAllApiData] = useState([]);

  const [allProduct, setAllProduct] = useState(true);
  const [tshirt, setTshirt] = useState(true);
  const [denim, setDenim] = useState(true);
  const [Sweatshirt, setSweatshirt] = useState(true);
  const [poloTshirt, setPoloTshirt] = useState(true);
  const [shirt, setShirt] = useState(true);

  const fetchData = async () => {
    return fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setAllApiData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterFun = (category) => {
    if (category) {
      const filterData = allApiData.filter((ele) => {
        return ele.tag === category;
      });
      setApiData(filterData);
    } else {
      setApiData(allApiData);
    }

    if (category === "T-shirt") {
      setTshirt(!tshirt);

      setShirt(!false);
      setAllProduct(false);
      setSweatshirt(true);
      setDenim(true);
      setPoloTshirt(true);
    } else if (category === "Denim") {
      setDenim(!denim);
      setTshirt(true);
      setShirt(true);
      setAllProduct(false);
      setSweatshirt(true);
      setPoloTshirt(true);
    } else if (category === "sweatshirt") {
      setSweatshirt(!Sweatshirt);
      setTshirt(true);
      setShirt(true);
      setAllProduct(false);
      setDenim(true);
      setPoloTshirt(true);
    } else if (category === "polo") {
      setPoloTshirt(!poloTshirt);

      setShirt(true);
      setAllProduct(false);
      setTshirt(true);
      setSweatshirt(true);
      setDenim(true);
    } else if (category === "shirt") {
      setShirt(!shirt);
      setAllProduct(false);
      setTshirt(true);
      setSweatshirt(true);
      setDenim(true);
      setPoloTshirt(true);
    } else {
      setAllProduct(true);

      setShirt(true);
      setTshirt(true);
      setSweatshirt(true);
      setDenim(true);
      setPoloTshirt(true);
    }
  };

  return (
    <>
      <Header />
      <div className="header_info py-3">
        <h6 className="mt-1 text-white text-center fs-6">
          Invite friends to Big Fashion Festival & get up to $150 MynCash for
          every person who visits
        </h6>
        <button>Invite Now</button>
      </div>
      <Container fluid>
        <h5 className="fs-6 my-4">
          All Products{" "}
          <span className="text-muted">({apiData.length} Products)</span>
        </h5>

        <div className="d-flex filter_btns align-items-center py-2">
          <h5 className="fs-6 mt-2">FILTERS :</h5>
          <button
            className={allProduct ? "filter_btn_active" : ""}
            onClick={() => filterFun()}
          >
            All Products
          </button>
          <button
            className={!tshirt ? "filter_btn_active" : ""}
            onClick={() => filterFun("T-shirt")}
          >
            Tee Shirt
          </button>
          <button
            className={!denim ? "filter_btn_active" : ""}
            onClick={() => filterFun("Denim")}
          >
            Denim
          </button>
          <button
            className={!Sweatshirt ? "filter_btn_active" : ""}
            onClick={() => filterFun("sweatshirt")}
          >
            Sweatshirts
          </button>
          <button
            className={!poloTshirt ? "filter_btn_active" : ""}
            onClick={() => filterFun("polo")}
          >
            Polo Tee shirt
          </button>
          <button
            className={!shirt ? "filter_btn_active" : ""}
            onClick={() => filterFun("shirt")}
          >
            Shirt
          </button>
        </div>
        {/* <div className="mt-4 d-flex flex-wrap products_container">
          {apiData.map((ele, ind) => {
            return (
              <div key={ele.id}>
                <Card
                  className="product_card border-0 card"
                  style={{ width: "12rem", margin: "10px" }}
                >
                  <Link to={`/productview/${ele.id}`}>
                    <Card.Img variant="top" src={ele.image_src} />
                  </Link>
                  <Card.Body style={{ textAlign: "left" }}>
                    <Card.Title className="product_title">
                      {ele.vendor}
                    </Card.Title>
                    <Card.Text className="text-muted product_name">
                      {ele.name}
                    </Card.Text>
                    <div className="d-flex product_price">
                      <p>${ele.price} </p>
                      <p className="text-muted text-decoration-line-through">
                        {" "}
                        ${ele.compare_at_price}
                      </p>
                      <p className="text-danger fs-6">(50% OFF)</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div> */}

        <Row>
          {apiData.map((ele, inx) => {
            return (
              <Col key={inx}>
                <Card
                  className="product_card border-0 card"
                  style={{ width: "14rem", margin: "10px" }}
                >
                  <Link to={`/productview/${ele.id}`}>
                    <Card.Img variant="top" src={ele.image_src} />
                  </Link>
                  <Card.Body style={{ textAlign: "left" }}>
                    <Card.Title className="product_title">
                      {ele.vendor}
                    </Card.Title>
                    <Card.Text className="text-muted product_name">
                      {ele.name}
                    </Card.Text>
                    <div className="d-flex product_price">
                      <p>${ele.price} </p>
                      <p className="text-muted text-decoration-line-through">
                        {" "}
                        ${ele.compare_at_price}
                      </p>
                      <p className="text-danger fs-6">(50% OFF)</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Products;
