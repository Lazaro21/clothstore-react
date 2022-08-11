import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import {CartIconContainer, ShoppingIconContainer, ItemCount} from "./cart-icon.styles.jsx";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, quantityItemsCart } = useContext(CartContext);

	const toggleIsCartOpen = () => {
		setIsCartOpen(!isCartOpen)

	}

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIconContainer />
			<ItemCount>{quantityItemsCart}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
