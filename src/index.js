import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import "./index.scss";
import { UserProvider } from "./context/user.context";
import { CategoriesProvider } from "./context/categories.context";
import { CartProvider } from "./context/cart.context";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.querySelector("#root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<CategoriesProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</CategoriesProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
