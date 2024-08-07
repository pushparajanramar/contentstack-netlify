"use client";
import Slider from "react-slick";
import ProductItem from "./ProductItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "../SectionHeading";
import { Button } from "../../Elements/Button";
// import ProductItem from "../../PLP/Products/ProductItem";
import { getHomePageProductCarousel } from "../../../lib/methods";
import React, { useEffect, useState, useRef, Suspense } from "react";

function ProductCarousel(propsData) {
  const {
    heading,
    description,
    cta,
    productCards,
    defaultProducts = [],
    isStoryBook = false,
  } = propsData;

  const sliderRef = useRef(null);
  const [recordsPerPage] = useState(4);
  let [products, setProducts] = useState(defaultProducts);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    speed: 500,
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(() => newIndex);
    },
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          initialSlide: 1,
          swipeToSlide: true,
          infinite: true,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          initialSlide: 1,
          swipeToSlide: true,
          infinite: true,
        },
      },
    ],
  };

  console.log("defaultProducts", defaultProducts);
  // useEffect(() => {
  //   if (!defaultProducts || !defaultProducts.length) {
  //     getProductDetails();
  //   }
  // }, []);

  const getProductDetails = async () => {
    const productIds = productCards?.map((ele) => ele.product_id);
    const result = await getHomePageProductCarousel({ productIds });
    if (result.response && result.response.docs) {
      setProducts(result.response.docs.filter(Boolean));
    }
  };

  const handleNext = () => {
    sliderRef?.current?.slickNext();
  };
  const handlePrev = () => {
    sliderRef?.current?.slickPrev();
  };

  const currentPage = Math.round((currentSlide + 1) / recordsPerPage + 1);
  const totalPages = Math.round(products.length / recordsPerPage);

  return (
    <div className="product-carousel cg-width">
      <Suspense fallback={<div>Loading...</div>}>
        {/* <SectionHeading heading={heading} content={description} /> */}

        <div className="slider-wrapper">
          <div className="slider-nav p-sm">
            <button
              type="button"
              data-role="none"
              aria-hidden="true"
              aria-disabled="true"
              onClick={handlePrev}
              className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
              }
            ></button>
            <span>
              {products?.length >= 1 ? currentPage + " / " + totalPages : null}
            </span>
            <button
              type="button"
              data-role="none"
              aria-hidden="true"
              aria-disabled="false"
              className={
                "slick-next slick-arrow" +
                (currentPage === totalPages ? " slick-disabled" : "")
              }
              onClick={handleNext}
            ></button>
          </div>
          <Slider {...settings} ref={sliderRef}>
            {products?.map((product, index) => {
              console.log("product", product);
              if (!product) return null;
              const colorVariants = product?.variants?.filter(
                (item) => item.name === "color"
              );
              const sizeVariants = product?.variants?.filter(
                (item) => item.name === "size"
              );

              const productData = {
                ...product,
                url: product.url,
                colorVariants,
                defaultSizes: sizeVariants,
              };
              return (
                <div
                  className="product-grid"
                  key={"product-carousel" + product.productId + index}
                >
                  <ProductItem product={productData} />
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="w2">
          <Button
            className="cg-button primary-black"
            label={cta?.title}
            url={cta?.href}
            type="primary-black"
          />
        </div>
      </Suspense>
    </div>
  );
}

export default ProductCarousel;
