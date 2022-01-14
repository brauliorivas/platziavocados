import { useState, useEffect } from 'react';

const useCart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    let localCart;

    if (typeof window !== 'undefined') {
        localCart = localStorage.getItem('cart');
    }
    
    const addToCart = (newProduct) => {
        let isNew = true;
        cart.map(product => {
            if (product.product.id == newProduct.product.id) {
                product.quantity += newProduct.quantity;
                isNew = false;
                setCart([...cart]);
            }
        });
        if (isNew) {
            setCart([...cart, newProduct]);
        }
    }

    const removeFromCart = (product) => {
        console.log(product);
        console.log(cart)
        setCart(cart.filter(item => item.product.id !== product.product.id));
    }

    const hydrateCart = () => {
        if (localCart) {
            console.log('info retrieved from local storage');
            setCart(JSON.parse(localCart));
        }   
    }

    const saveChanges = () => {
        if (localCart) {
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    const calculateTotal = () => {
        let total = 0;
        cart.map(item => {
            total += item.quantity * item.product.price;
        });
        return total.toFixed(2);
    };

    useEffect(() => {
        saveChanges();
        setTotal(calculateTotal());
        console.log('cambios guardados')
    }, [cart])


    useEffect(() => {
        hydrateCart();
    }, [])
    
    return {
        cart,
        total,
        addToCart,
        removeFromCart
    }
}

export default useCart;