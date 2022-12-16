import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FcSearch } from "react-icons/fc";

const SearchButton = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);

  return (
    <>
      <FcSearch onClick={handleShow} className="fs-1 mt-1" role="button" />

      <Modal show={show} onHide={handleClose} className="mt-3">
        <Modal.Header closeButton>
          <Modal.Title className="fs-6">Search Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Search" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            ></Form.Group>
          </Form>

          <div className="d-flex">
            <ul className="ps-0">
              <li className="list-group mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <img
                    className="searching_img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkHXQ7dprFAu2x4Z605uuBOTM1fJcq7_cXBUnvJ6V_SYyGLZhBoqYdtkcUZAvlzCXnpM&usqp=CAU"
                    alt=""
                  />
                  <p className="fs-6 ms-2">Solid Polo Collar Grey T-shirt</p>
                </div>
              </li>

              <li className="list-group mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <img
                    className="searching_img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkHXQ7dprFAu2x4Z605uuBOTM1fJcq7_cXBUnvJ6V_SYyGLZhBoqYdtkcUZAvlzCXnpM&usqp=CAU"
                    alt=""
                  />
                  <p className="fs-6 ms-2">Solid Polo Collar Grey T-shirt</p>
                </div>
              </li>

              <li className="list-group mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <img
                    className="searching_img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkHXQ7dprFAu2x4Z605uuBOTM1fJcq7_cXBUnvJ6V_SYyGLZhBoqYdtkcUZAvlzCXnpM&usqp=CAU"
                    alt=""
                  />
                  <p className="fs-6 ms-2">Solid Polo Collar Grey T-shirt</p>
                </div>
              </li>

              <li className="list-group mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <img
                    className="searching_img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkHXQ7dprFAu2x4Z605uuBOTM1fJcq7_cXBUnvJ6V_SYyGLZhBoqYdtkcUZAvlzCXnpM&usqp=CAU"
                    alt=""
                  />
                  <p className="fs-6 ms-2">Solid Polo Collar Grey T-shirt</p>
                </div>
              </li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default SearchButton;
