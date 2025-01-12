import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function Card({ item, type='' }) {
  
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state);

  function handleAddToCart() {
    dispatch(addToCart(item));
  }

  function handleRemoveFromCart(){
    dispatch(removeFromCart(item.id));
  }

  if(type === 'cart'){

    return (
      <div
        key={item.id}
        className="max-w-xs flex flex-col justify-between items-center flex-[1_1_250px] shadow-lg rounded-lg overflow-hidden text-center p-1 transition-transform duration-300 ease-in-out bg-gray-800"
      >
        <img
          src={item?.image}
          alt={item?.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <h3 className="text-lg my-2 text-gray-100 flex flex-col justify-center items-center ">
          <h2
            title={item?.title}
            className="text-lg font-bold text-white mb-2 text-center truncate"
          >
            {item?.title.length > 25
              ? `${item?.title.slice(0, 25)}...`
              : item?.title}
          </h2>
          <span>{item?.category}</span>
          <span className="bg-black px-6 rounded-md m-2">${item?.price}</span>
          
  
          <span onClick={handleRemoveFromCart}  className="inline-block px-5 py-2 bg-gray-700 text-gray-100 no-underline rounded-md text-sm text-center transition-transform duration-200 ease-in-out hover:bg-teal-500 hover:scale-105 active:scale-95 w-60 ">
            {
              'Remove from cart'
            }
          </span>
        </h3>
      </div>
    );

  }

  else{
  return (
    <div
      key={item.id}
      className=" max-w-xs flex flex-col justify-between items-center flex-[1_1_250px] shadow-lg rounded-lg overflow-hidden text-center p-1 transition-transform duration-300 ease-in-out bg-gray-800"
    >
      <img
        src={item?.image}
        alt={item?.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-lg my-2 text-gray-100 flex flex-col justify-center items-center ">
        <h2
          title={item?.title}
          className="text-lg font-bold text-white mb-2 text-center truncate"
        >
          {item?.title.length > 25
            ? `${item?.title.slice(0, 25)}...`
            : item?.title}
        </h2>
        <span>{item?.category}</span>
        <span className="flex items-center justify-center gap-2 p-1 text-sm text-gray-400">
          <FaStar style={{ color: "gold", fontSize: "24px" }} />
          {item?.rating.rate}({item?.rating.count})
        </span>
        <span className="bg-black px-6 rounded-md m-2">${item?.price}</span>

        <span onClick={cart.some(product => item.id === product.id ) ? handleRemoveFromCart : handleAddToCart}  className="inline-block px-5 py-2 bg-gray-700 text-gray-100 no-underline rounded-md text-sm text-center transition-transform duration-200 ease-in-out hover:bg-teal-500 hover:scale-105 active:scale-95 w-60 ">
          {
            cart.some(product => item.id === product.id ) ? 'Remove from cart' : 'Add to cart'
          }
        </span>
      </h3>
    </div>
  );
  }
}
