/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { CarrouoselContainer } from "./RecommendationCarruousel.style";

interface Product {
  id: number;
  displayTitle: string;
  imageUrl?: string;
}

const RecommendationCarousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const truncateText = (input: string, size: number) =>
    input.length > size ? `${input.substring(0, size)}...` : input;

  useEffect(() => {
    fetch("https://api.wizybot.com/products/demo-product-list")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <CarrouoselContainer>
      {products?.map((product) => (
        <div className="card" key={product.id}>
            <div className="image">
              {product.imageUrl && (
                <img src={product.imageUrl} alt={product.displayTitle} />
              )}
            </div>
            <div className="image-info">
              <p className="title">{truncateText(product.displayTitle, 20)}</p>
              <p className="price">$50.00</p>
              <p className="view_detail">View Page</p>
            </div>
        </div>
      ))}
    </CarrouoselContainer>
  );
};

export default RecommendationCarousel;
