import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	const { cartItems, cartTotal } = useContext(CartContext);
	// console.log(cartItems)
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout')
	}

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((product) =>
					product.quantity > 0 ? (
						<CartItem key={product.id} product={product} />
					) : null
				)}
				<span>Total: ${cartTotal}</span>
				<Button buttonType="inverted" onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
			</div>
		</div>
	);
};

export default CartDropdown;
