import { Col, Container, Row } from "react-bootstrap";
import "../dashboard/dashboard.scss";
import {
  FcBarChart,
  FcCurrencyExchange,
  FcGrid,
  FcVoicePresentation,
} from "react-icons/fc";

import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import AdminHeader from "../../components/header/AdminHeader";

const Dashboard = () => {
  return (
    <>
      <AdminHeader />
      <Container className="mt-2">
        <h6 className="fs-4 fw-light"> Hello john </h6>
        <h6 className="fs-5 fw-light text-muted">Welcome to the dashboard</h6>
        <Row>
          <Col lg={3} md={6}>
            <div className="m-2 p-3 rounded dashboard_box bg-opacity-50 bg-light shadow-sm mx-auto">
              <h6 className="fs-6 fw-normal text-center">Order</h6>
              <div className="d-flex justify-content-around align-items-end">
                <FcBarChart className="fs-1 me-3" />
                <h4>24</h4>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="m-2 p-3 rounded dashboard_box bg-opacity-50 bg-light shadow-sm mx-auto">
              <h6 className="fs-6 fw-normal text-center">Customers</h6>
              <div className="d-flex justify-content-around align-items-end">
                <FcVoicePresentation className="fs-1 me-3" />
                <h4>24</h4>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="m-2 p-3 rounded dashboard_box bg-opacity-50 bg-light shadow-sm mx-auto">
              <h6 className="fs-6 fw-normal text-center">Order</h6>
              <div className="d-flex justify-content-around align-items-end">
                <FcGrid className="fs-1 me-3" />
                <h4>24</h4>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="m-2 p-3 rounded dashboard_box bg-opacity-50 bg-light shadow-sm mx-auto">
              <h6 className="fs-6 fw-normal text-center">Order</h6>
              <div className="d-flex justify-content-around align-items-end">
                <FcCurrencyExchange className="fs-1 me-3" />
                <h4>24</h4>
              </div>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-between align-items-center">
          <h6 className="fs-5 fw-normal my-3">Today orders</h6>
          <div className="">
            <Link to="/orders" className="text-dark">
              Viwe All <BsArrowRightShort className="fs-5" />
            </Link>
          </div>
        </div>
        <div className="d-flex flex-column">
          <ul className="ps-0">
            <li className="list-group bg-light w-100 my-2 shadow-sm ">
              <div className="d-flex justify-content-around py-3 pb-0">
                <p>1.</p>
                <p className="bg-alert-info">Today 12:24</p>
                <p>7898545478</p>
                <p>Order details.</p>
              </div>
            </li>

            <li className="list-group bg-light w-100 my-2 shadow-sm">
              <div className="d-flex justify-content-around py-3 pb-0">
                <p>1.</p>
                <p className="bg-alert-info">Today 12:24</p>
                <p>7898545478</p>
                <p>Order details.</p>
              </div>
            </li>

            <li className="list-group bg-light w-100 my-2 shadow-sm">
              <div className="d-flex justify-content-around py-3 pb-0">
                <p>1.</p>
                <p className="bg-alert-info">Today 12:24</p>
                <p>7898545478</p>
                <p>Order details.</p>
              </div>
            </li>

            <li className="list-group bg-light w-100 my-2 shadow-sm">
              <div className="d-flex justify-content-around py-3 pb-0">
                <p>1.</p>
                <p className="bg-alert-info">Today 12:24</p>
                <p>7898545478</p>
                <p>Order details.</p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
