import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
	// if (cartItems.includes(productToAdd)) {
	// 	const updatedCartItems = [...cartItems];
	// 	const indexProductToAdd = updatedCartItems.indexOf(productToAdd);
	// 	updatedCartItems[indexProductToAdd].quantity += 1;
	// 	return updatedCartItems;
	// } else {
	//     productToAdd['quantity'] = 1
	//     return [...cartItems, productToAdd]
	// }

	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: (cartItem.quantity += 1) }
				: cartItem
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => null,
	cartItems: [],
	addItemToCart: () => {},
	quantityItemsCart: 0,
	setQuantityItemsCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [quantityItemsCart, setQuantityItemsCart] = useState(0);


	useEffect(() => {
        const newCartCount = cartItems.reduce( (total, cartItem) => total += cartItem.quantity, 0)
        setQuantityItemsCart(newCartCount)
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		quantityItemsCart,
		setQuantityItemsCart,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
