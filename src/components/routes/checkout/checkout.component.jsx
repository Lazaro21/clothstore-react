import { useContext } from "react";

import { CartContext } from "../../../context/cart.context";

import CheckOutItem from "../../checkout-item/checkout-item.component";
import Button from "../../button/button.component";

import "./checkout.styles.scss";

const Checkout = () => {
	const cartContext = useContext(CartContext);
	const { cartItems, cartTotal } = cartContext;
	// console.log(cartItems)
	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((product) =>
				product.quantity > 0 ? (
					<CheckOutItem key={product.id} product={product} />
				) : null
			)}
			<span className='total'>Total: ${cartTotal}</span>
		</div>
	);
};

export default Checkout;
