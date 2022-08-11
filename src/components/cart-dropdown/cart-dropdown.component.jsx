import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
	const { cartItems, cartTotal } = useContext(CartContext);
	// console.log(cartItems)
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((product) => (
						<CartItem key={product.id} product={product} />
					))
				) : (
					<EmptyMessage>Your Cart is Empty</EmptyMessage>
				)}
				{
					cartItems.length ? <span>Total: ${cartTotal}</span> : ":("
				}
				<Button
					buttonType={BUTTON_TYPE_CLASSES.inverted}
					onClick={goToCheckoutHandler}
				>
				CHECKOUT
				</Button>
			</CartItems>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
