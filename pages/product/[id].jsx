import React, { useEffect, useState, useRef, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import CartContext from '../../context/CartContext';
// import { GetStaticProps } from 'next';

export const getStaticPaths = async () => {
  const response = await fetch(`https://platziavocados.vercel.app/api/avo`);
  const { data } = await response.json(); 

  const paths = data.map(({ id }) => ({
    params: {
      id
    }
  }));

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => { // solo paginas, no componentes al igual que SSR
  // const protocol = process.env.PROTOCOL;
  // const url = process.env.URL;
  const response = await fetch(`https://platziavocados.vercel.app/api/avo/${params.id}`);
  const item = await response.json(); 

  return {
    props: {
      product: item
    }
  }
}

const ProductPage = ( { product } ) => {
  const { addToCart } = useContext(CartContext);
  const input = useRef(null);

  const onSubmit = () => {
    if (validate(input.current.value)) {
      const quantity = parseInt(input.current.value);
      addToCart({
        quantity,
        product,
      });
    }
  }

  const validate = (value) => {
    if (value > 0 && (value % 1 === 0)) {
      return true;
    }
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
            <input type="number" ref={input} placeholder="1"/>
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
