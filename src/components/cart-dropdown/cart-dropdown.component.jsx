import { useContext } from "react";
import _ from 'lodash'

import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	const { cart } = useContext(CartContext);


	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
                {/* {cartItems.map( (product) => (
                    <div key={product.id}>
                        {product.name}
                    </div>
                ))} */}
				<Button>GO TO CHECKOUT</Button>
			</div>
		</div>
	);
};

export default CartDropdown;
