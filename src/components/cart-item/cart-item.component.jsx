import "./cart-item.styles.scss";

const CartItem = ( { product } ) => {
	const { name, quantity, price, imageUrl } = product;
	// console.log(cartItem.product.name);
	return (
		<div className="cart-item-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="item-details">
				<span>{name}</span>
				<span>
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
