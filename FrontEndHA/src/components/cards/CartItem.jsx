import { useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../redux/cart/cartSlice";
import { FaRegTrashCan } from "react-icons/fa6";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
      })
    );
  };

  const handleDecrease = () => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: -1,
      })
    );
  };

  return (
    <div className="border border-black p-3 row mb-2">
      <div className="col-4 ">
        <img className="img-fluid" src="./greenapple.jpg" alt="" />
      </div>
      <div className="col-8 d-flex flex-row justify-content-evenly align-items-center">
        <div className="d-flex justify-content-evenly flex-column">
          <span className="py-1 fw-bold">{item.name}</span>

          <div className="d-flex j py-1 justify-content-center">
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={handleDecrease}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-evenly ">
          <span className="py-1">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
          <FaRegTrashCan
            className=" mt-2 w-auto"
            onClick={() => dispatch(removeFromCart({ id: item.id }))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
