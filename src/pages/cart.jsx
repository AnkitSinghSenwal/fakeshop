import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/card/card";
import { Link } from "react-router-dom";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
    setTotalItem(cart.length);
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <>
      <div className=' m-1  text-center text-2xl text-emerald-50 flex justify-center items-center gap-1 flex-col' >
        
        <div className="bg-[#008080] rounded p-2 w-full"
        >CART</div>

        { cart.length > 0 ? 
        <div className="flex flex-col gap-1 w-full justify-center sm:flex-row">
            <div className="p-2 bg-orange-300 rounded">Total item: {totalItem}</div> 
            <div className="p-2 bg-orange-400 rounded">Total cost:  ${Math.round(totalCart * Math.pow(10, 2)) / Math.pow(10, 2)}</div>
        </div>
        : 
        null
        }

      </div>



      {cart && cart.length ? (
        <div className='flex flex-wrap gap-5 p-5 justify-center '>

          {cart.map((item) => (
            <Card item={item} type='cart' />
          ))}
        </div>
      ) : (
        <div className="h-60 w-screen flex flex-col gap-4 justify-center items-center text-center text-cyan-400 text-4xl font-bold">
          Your cart is empty...
          <Link to={'/fakeshop/'}> <div className="inline-block px-5 py-2 bg-gray-700 text-gray-100 no-underline rounded-md text-sm text-center transition-transform duration-200 ease-in-out  hover:bg-[#2874F0] hover:scale-105 active:scale-95 w-35">SHOP NOW</div></Link>
        </div>

      )}
    </>
  );
}
