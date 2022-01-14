import React, { useEffect, useState, useRef, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import CartContext from '../../context/CartContext';

const ProductPage = () => {
  const { query } = useRouter();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState([]);

  const input = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/avo/${query.id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchData();
  }, [query.id]);

  const onSubmit = () => {
    const quantity = parseInt(input.current.value);
    addToCart({
      quantity,
      product,
    });
  }

  if (!product.name) {
    return <div>Loading...</div>;
  }
  return (
    <section className="product">
      <div className="product__data">
        <div className="product__image">
          <Image src={product.image} alt={product.name} width={250} height={250} />
        </div>
        <div className="product__info">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-price">{product.price}</p>
          <div className="product-sku">
            <p>
              <span>SKU</span>: {product.sku}
            </p>
          </div>
          <div className="product__cart-handle">
            <input type="number" ref={input} value="1"/>
            <button onClick={onSubmit}><i className="fas fa-cart-plus"></i>Add to Cart</button>
          </div>
        </div>
      </div>
      <h3 className="product-about">About this avocado</h3>
      <p className="product-description">{product.attributes.description}</p>
      <div className="product__attributes">
        <div className="product__attributes-row product__attributes-title">
          <p className="product__attributes-fact">Attributes</p>
        </div>
        <div className="product__attributes-row">
          <p className="product__attributes-fact">Shape</p>
          <p className="product__attributes-fact-data">{product.attributes.shape}</p>
        </div>
        <div className="product__attributes-row">
          <p className="product__attributes-fact">Hardiness</p>
          <p className="product__attributes-fact-data">{product.attributes.hardiness}</p>
        </div>
        <div className="product__attributes-row">
          <p className="product__attributes-fact">Taste</p>
          <p className="product__attributes-fact-data">{product.attributes.taste}</p>
        </div>
      </div>
      <style jsx>{`
          .product {
            width: 100%;
            padding-left: 8%; 
            padding-right: 8%;
            margin-top: 40px;
            font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
          }
          .product-title {
            font-size: 2rem;
          }
          .product-price {
            font-size: 1.6rem;
          }
          .product-sku {
            font-size: 1.2rem;
            background-color: #e8e8e8;
            color: rgb(0 0 0 / 60%);
            display: inline-block;
            padding-left: 5px;
            padding-right: 5px;
          }
          .product-sku p {
            margin-top: 4px;
            margin-bottom: 4px;
          }
          .product-sku p span {
            font-weight: 700;
          }
          .product__cart-handle {
            margin-top: 15px;
            max-width: 350px;
            display: flex;
            flex-direction: row;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }
          .product__cart-handle input{
            border: 1px solid #e8e8e8;
            border-right: none;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 16px;
            padding-right: 16px;
            width: 70%;
          }
          .product__cart-handle input:focus-visible {
            outline: none;
            font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
          }
          .product__cart-handle button {
            background-color: #21ba45;
            color: white;
            border: 1px solid #21ba45;
            font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
            font-weight: 700;
            white-space: nowrap;
            padding-right: 10px;
            padding-left: 10px;
            width: 40%;
          }
          .product-about {
            font-size: 1.8rem;
          }
          .product__attributes-title {
            border-top: 1px solid #e8e8e8 !important;
          }
          .product-description {
            font-size: 1.6rem;
            border-bottom: 1px solid #e8e8e8;
            padding-bottom: 15px;
          }
          .product__attributes {
            margin-right: auto;
            margin-left: auto;
            font-size: 1.6rem;
          }
          .product__attributes-row {
            display: flex;
            flex-direction: column;
            border: 1px solid #e8e8e8;
            border-top: none;
            padding-left: 5%;
          }
          .product__attributes-fact {
            font-weight: 700;
          }
          .product__attributes-fact-data {
            margin: 0;
            margin-bottom: 10px;
          }
          @media (min-width: 768px) {
            .product__data {
              display: flex;
              flex-direction: row;
            }
          }
      `}</style>
    </section> 
  )
}

export default ProductPage;