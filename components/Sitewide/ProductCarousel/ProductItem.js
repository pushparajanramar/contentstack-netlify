"use client";
import Image from "next/image";
import React from "react";

function ProductItem({ product }) {
  console.log("product", product);
  return (
    <>
      <div>
        {product?.images?.map((el, index) => (
          <div key={index}>
            <Image
              alt=""
              width={200}
              height={200}
              src={el?.url}
              loader={() => el?.url}
              unoptimized={true}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductItem;
