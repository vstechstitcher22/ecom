import { Button, Card, Container, ListGroup } from "react-bootstrap";
import AdminHeader from "../../components/header/AdminHeader";
import "../orders/orders.scss";

const Orders = () => {
  return (
    <>
      <AdminHeader />
      <Container>
        <h6 className="fs-5 fw-normal my-3">Order</h6>

        <div className=" d-flex justify-content-between align-items-center">
          {/* <p
            className="text-center bg-danger bg-opacity-25 text-danger fw-bold p-1 rounded"
            style={{ width: "100px" }}
          >
            {" "}
            Cancelled
          </p> */}

          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div className="order_id_date">
                <p className="mb-0">54546656</p>
                <p className="text-muted mb-0">12 Dec 2022, 3:04</p>
              </div>
              <p
                className="text-center bg-danger bg-opacity-25 text-danger fw-bold mb-0 rounded"
                style={{ width: "100px" }}
              >
                Cancelled
              </p>
            </Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center justify-content-between">
                  <span>Customer Name</span>
                  <span>John doe</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center justify-content-between">
                  <span>Products</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <span>men Blue Regular Fit Striped Casual Shirt</span>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>Price</ListGroup.Item>
                <ListGroup.Item className="d-flex">
                  <h6>Delibery status</h6>
                  <p>Cancelled</p>
                </ListGroup.Item>
              </ListGroup>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Orders;
