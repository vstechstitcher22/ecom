// import { Card, Container } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import "../Cart/cart.scss";
// import { MdDelete } from "react-icons/md";
// import { add, decrementQuantity, removeCartItem } from "../../store/cartSlice";
// import { useState } from "react";
// // Bootstrap
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// const Cart = () => {
//   // ! boostrap code
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   // ! boostrap code

//   const cartList = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   const removeFromCart = (deleteId) => {
//     dispatch(removeCartItem(deleteId));
//     // console.log(newItem);
//   };
//   const decrement = (item) => {
//     dispatch(decrementQuantity(item));
//   };
//   const addToCart = (newItem, quantity) => {
//     dispatch(add({ newItem, quantity }));
//   };

//   return (
//     <>
//       {/* <Container className=" cart_container">
//         <h3>Your Cart</h3>

//         <div
//           className="d-flex align-items-center flex-column overflow-auto overflow_scroll"
//           style={{ height: "65vh" }}
//         >
//           {cartList.map((item, index) => {
//             // console.log(item.quantity, "item in cart");
//             return (
//               <Card
//                 key={index}
//                 className="cart_card d-flex flex-row mb-2 cart_list border-0"
//               >
//                 <Card.Body className="d-flex w-100">
//                   <Card.Img
//                     className="cart_item_img"
//                     variant="top"
//                     src={item.newItem.image_src}
//                   />
//                   <div className="d-flex justify-content-between w-100">
//                     <div className="px-3">
//                       <p className="m-0">{item.newItem.name}</p>
//                       <p className="text-muted m-0  ">
//                         Rs. {item.newItem.price}
//                       </p>
//                       <div className="quantity_btn">
//                         <button onClick={() => decrement(item.newItem)}>
//                           -
//                         </button>
//                         <span>{item.quantity}</span>
//                         <button onClick={() => addToCart(item.newItem, 1)}>
//                           +
//                         </button>
//                       </div>
//                     </div>
//                     <div className="ml-auto">
//                       <p>Rs. {item.quantity * item.newItem.price}</p>
//                       <br />
//                       <MdDelete
//                         onClick={() => removeFromCart(item.newItem.id)}
//                         className="fs-3 text-danger"
//                       />
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </div>
//         <hr />
//         {cartList.length > 0 ? (
//           <div className="checkout_section">
//             <div className="d-flex justify-content-between alig">
//               <h6 className="text-muted">Subtotal</h6>
//               <p className="text-muted">
//                 Rs.{" "}
//                 {cartList.reduce(
//                   (total, item) => total + item.newItem.price * item.quantity,
//                   0
//                 )}
//               </p>
//             </div>
//             <p className="text-muted m-0">
//               Tax included and shipping calculated at checkout
//             </p>
//             <button className="btn btn-danger w-100 rounded-0">
//               Check out
//             </button>
//           </div>
//         ) : (
//           ""
//         )}
//       </Container> */}

//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <div className="modal_container">
//         <Modal show={show} onHide={handleClose} className="modal_class">
//           <Modal.Header closeButton>
//             <Modal.Title>Cart</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="cart_container">
//               <div
//                 className="d-flex align-items-center flex-column overflow-auto overflow_scroll"
//                 style={{ height: "65vh" }}
//               >
//                 {cartList.map((item, index) => {
//                   // console.log(item.quantity, "item in cart");
//                   return (
//                     <Card
//                       key={index}
//                       className="cart_card d-flex flex-row mb-2 cart_list border-0"
//                     >
//                       <Card.Body className="d-flex w-100">
//                         <Card.Img
//                           className="cart_item_img"
//                           variant="top"
//                           src={item.newItem.image_src}
//                         />
//                         <div className="d-flex justify-content-between w-100">
//                           <div className="px-3">
//                             <p className="m-0">{item.newItem.name}</p>
//                             <p className="text-muted m-0  ">
//                               Rs. {item.newItem.price}
//                             </p>
//                             <div className="quantity_btn">
//                               <button onClick={() => decrement(item.newItem)}>
//                                 -
//                               </button>
//                               <span>{item.quantity}</span>
//                               <button
//                                 onClick={() => addToCart(item.newItem, 1)}
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </div>
//                           <div className="ml-auto">
//                             <p>Rs. {item.quantity * item.newItem.price}</p>
//                             <br />
//                             <MdDelete
//                               onClick={() => removeFromCart(item.newItem.id)}
//                               className="fs-3 text-danger"
//                             />
//                           </div>
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   );
//                 })}
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer className="bootstrap_modal_footer">
//             {cartList.length > 0 ? (
//               <div className="checkout_section">
//                 <div className="d-flex justify-content-between alig">
//                   <h6 className="text-muted">Subtotal</h6>
//                   <p className="text-muted">
//                     Rs.{" "}
//                     {cartList.reduce(
//                       (total, item) =>
//                         total + item.newItem.price * item.quantity,
//                       0
//                     )}
//                   </p>
//                 </div>
//                 <p className="text-muted m-0">
//                   Tax included and shipping calculated at checkout
//                 </p>
//                 <button className="btn btn-danger w-100 rounded-0">
//                   Check out
//                 </button>
//               </div>
//             ) : (
//               ""
//             )}
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default Cart;
