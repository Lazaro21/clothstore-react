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

const removeItemCart = (cartItems, productToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToRemove.id
	);

	// console.log(cartItems)
	// console.log(existingCartItem)
	// console.log(productToRemove)

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(
			(cartItem) => cartItem.id !== productToRemove.id
		);
	} else {
		return cartItems.map((cartItem) =>
			cartItem.id === productToRemove.id
				? { ...cartItem, quantity: (cartItem.quantity -= 1) }
				: cartItem
		);
	}
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => null,
	cartItems: [],
	addItemToCart: () => {},
	quantityItemsCart: 0,
	setQuantityItemsCart: () => {},
	removeItemFromCart: () => {},
	removeProductFromCart: () => {},
	cartTotal: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [quantityItemsCart, setQuantityItemsCart] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	// console.log(cartItems);
	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => (total += cartItem.quantity),
			0
		);
		setQuantityItemsCart(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const totalValue = cartItems.reduce(
			(total, cartItem) => (total += cartItem.price * cartItem.quantity),
			0
		);
		setCartTotal(totalValue);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (productToRemove) => {
		setCartItems(removeItemCart(cartItems, productToRemove));
		// console.log(cartItems)
	};

	const removeProductFromCart = (productToRemove) => {
		setCartItems(
			cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
		);
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		removeItemFromCart,
		quantityItemsCart,
		setQuantityItemsCart,
		removeProductFromCart,
		cartTotal,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
