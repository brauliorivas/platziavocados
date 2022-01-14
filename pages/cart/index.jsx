import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem';

const index = () => {
    const { cart, total } = useContext(CartContext);

    return (
        <div className="cart">
            <div className="items">
                {cart.length > 0 ? cart.map(item => <CartItem key={item.product.id} item={item} />) : <div className="cart-empty">
                    <p className="cart-empty-title">Your cart is empty</p>
                    <p className="cart-empty-description">You will need to add some items to the cart before you can checkout.</p>
                </div>}
            </div>
            <div className="total">
                <p><span>Total:</span> {total}</p>
                <button className="checkout-button" type="button">Check out</button>
            </div>
            <style jsx>{`
                .total {
                    margin-top: 25px;
                    width: 90%;
                    margin-left: auto;
                    margin-right: auto;
                    display: flex;
                    flex-direction: row;
                    border: 1px solid rgb(222 222 222);
                    border-radius: 3px;
                    padding: 10px;
                }    
                .total p {
                    font-size: 1.6rem;
                    color: rgb(0 0 0 / 60%);
                    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
                    margin-left: 4%;
                }
                .total p span {
                    font-weight: 700;
                }
                .checkout-button {
                    background-color: rgb(27 28 29);
                    color: white;
                    border-radius: 3px;
                    border: none;
                    margin-left: auto;
                    margin-right: 8%;
                    width: 100px;
                    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
                }
                .cart-empty {
                    margin-top: 25px;
                    width: 90%;
                    margin-left: auto;
                    margin-right: auto;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid rgb(222 222 222);
                    border-radius: 3px;
                    padding: 10px;
                    box-shadow: inset 0 0 0 1px #c9ba9b, 0 0 0 0 transparent;
                    background-color: rgb(255 250 243);
                    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
                }
                .cart-empty-title {
                    font-size: 1.8rem;
                    font-weight: bold;
                    color: #794b02;
                    margin-bottom: 0;
                }
                .cart-empty-description {
                    color: #573a08;
                    font-size: 1.6rem;
                }
                @media (min-width: 768px) {
                    .total {
                        width: 80%;
                    }
                }
            `}</style>
        </div>
    );
}

export default index;