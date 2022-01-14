import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

const CartItem = (item) => {
    const { removeFromCart } = useContext(CartContext);
    const aguacate = item.item;

    const removeItem = () => {
        removeFromCart(aguacate);
    }
    return (
        <div className="item">
            <div className="image">
                <Image src={aguacate.product.image} width={250} height={250} />
            </div>
            <div className="info">
                <Link href="/product/[id]" as={`/product/${aguacate.product.id}`}>
                    <a className="name-link">
                        <h2 className="name">{aguacate.product.name}</h2>
                    </a>
                </Link>
                <p className="info-price">{aguacate.quantity} x {aguacate.product.price}</p>
                <p className="info-total">Subtotal: {(aguacate.quantity * aguacate.product.price).toFixed(2)}</p>
                <button className="remove-button" type="button" onClick={removeItem}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <style jsx>{`
                .item {
                    width: 90%;
                    margin-left: auto;
                    margin-right: auto;
                    display: flex;
                    flex-direction: column;
                    border-bottom: 1px solid rgb(222 222 222);
                    padding-bottom: 25px;
                }
                .info {
                    display: flex;
                    flex-direction: column;
                    margin-left: 8%
                }
                .name-link {
                    text-decoration: none
                }
                .name {
                    font-size: 2rem;
                    color: #4183c4;
                    font-weight: 700;
                    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
                }
                .info-price {
                    font-size: 1.6rem;
                    color: rgb(0 0 0 / 60%);
                    margin-top: 0;
                    margin-bottom: 0;
                    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
                }
                .info-total {
                    font-size: 1.6rem;
                    color: rgb(0 0 0 / 87%);
                    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
                }
                .remove-button {
                    background: none;
                    border: 1px solid #dedede;
                    border-radius: 3px;
                    width: 30px;
                    height: 29px;
                    margin-left: auto;
                    margin-right: 8%;
                }
                .remove-button i {
                    color: rgb(118 118 118);
                }
                @media (min-width: 768px) {
                    .item {
                        width: 80%;
                        display: flex;
                        flex-direction: row;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .remove-button {
                        margin-right: 0;
                    }
                    .info {
                        margin-left: auto;
                        margin-right: 15%;
                    }
                }
            `}</style>
        </div>
    );
}

export default CartItem;