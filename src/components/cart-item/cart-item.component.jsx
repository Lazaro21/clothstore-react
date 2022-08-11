import { ItemDetails, CartItemContainer } from "./cart-item.styles.jsx";

const CartItem = ({ product }) => {
	const { name, quantity, price, imageUrl } = product;
	// console.log(cartItem.product.name);
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<span className="name">{name}</span>
				<span>
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
