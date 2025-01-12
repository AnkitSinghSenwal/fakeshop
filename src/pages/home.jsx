import { useState, useEffect } from "react";
import Card from "../components/card/card";
import { Circles } from "react-loader-spinner";

export default function Home() {
  const [products, setProducts] = useState(() => {
    // Get the productsList from local storage
    const localData = localStorage.getItem("productsList");
    return localData ? JSON.parse(localData) : [];
  });
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    if (products.length > 0) {
      return null;
    } else {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setProducts(data);
            localStorage.setItem("productsList", JSON.stringify(data));
          } else {
            console.error("Unexpected API response format", data);
            setProducts([]);
          }
        } else {
          console.error(`Error: ${response.status} ${response.statusText}`);
          setProducts([]);
        }
      } catch (error) {
        console.error(`An error occurred while fetching products:`, error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
        <div>Loading...</div>
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height="80"
            width="80"
            color="blue"
            ariaLabel="loading"
            visible={true}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className=" m-1  text-center text-2xl text-emerald-50 flex justify-center items-center gap-1 sm:flex-col">
        <div className="bg-slate-400 rounded p-2 w-full">HOME</div>
      </div>

      <div className="flex flex-wrap gap-5 justify-center p-5">
        {products.length > 0 ? (
          <div className="flex flex-wrap gap-5 justify-center p-5">
            {products.map((product, index) => (
              <Card key={product.id || index} item={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-5 justify-center p-5">
            No products available.
          </div>
        )}
      </div>
    </>
  );
}
