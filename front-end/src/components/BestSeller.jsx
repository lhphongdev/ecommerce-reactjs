import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.splice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Mollit consectetur tempor et reprehenderit enim ad mollit culpa ipsum.
          Labore voluptate occaecat quis reprehenderit aliqua commodo nulla
          labore minim amet aute voluptate aute. Tempor enim commodo
          exercitation duis eu cillum ipsum sunt ad ullamco eiusmod do. Nisi
          consectetur elit quis esse enim minim id voluptate ullamco cillum
          pariatur id. Laboris labore ipsum ea est nisi elit sint laborum aliqua
          officia. Mollit in exercitation eiusmod labore proident mollit sit in
          do adipisicing ad.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
