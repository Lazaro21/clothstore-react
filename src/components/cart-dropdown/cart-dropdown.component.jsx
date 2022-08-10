import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    // console.log(cartItems)
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
                {cartItems.map( (product) => (
           
                    <CartItem key={product.id} product={product} />
                 ))}
				<Button>GO TO CHECKOUT</Button>
			</div>
		</div>
	);
};

export default CartDropdown;
