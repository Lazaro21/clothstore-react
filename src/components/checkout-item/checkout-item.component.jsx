import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./checkout-item.styles.scss";

const CheckOutItem = ({ product }) => {
	const { name, imageUrl, price, quantity } = product;
	// console.log("teste");

	const cartContext = useContext(CartContext);
	const { addItemToCart, removeItemFromCart, removeProductFromCart } =
		cartContext;

	const increaseQuantityHandler = () => addItemToCart(product);
	const decreaseQuantityHandler = () => removeItemFromCart(product);
	const removeProductFromCartHandler = () => removeProductFromCart(product);

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={decreaseQuantityHandler}> &#10094;</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={increaseQuantityHandler}>&#10095;</div>
			</span>
			<span className="price">{price}</span>
			<div
				className="remove-button"
				onClick={removeProductFromCartHandler}
			>
				&#10005;
			</div>
		</div>
	);
};

export default CheckOutItem;
