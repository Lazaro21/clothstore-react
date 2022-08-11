import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import {
	CheckoutItemContainer,
	ImageContainer,
	NamePrice,
	Quantity,
	Arrow,
	Value,
	RemoveButton
} from "./checkout-item.styles.jsx";

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
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<NamePrice>{name}</NamePrice>
			<Quantity>
				<Arrow onClick={decreaseQuantityHandler}> &#10094;</Arrow>
				<Value className="value">{quantity}</Value>
				<Arrow onClick={increaseQuantityHandler}>&#10095;</Arrow>
			</Quantity>
			<NamePrice>{price}</NamePrice>
			<RemoveButton
				className="remove-button"
				onClick={removeProductFromCartHandler}
			>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckOutItem;
