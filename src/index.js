import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import "./index.scss";
import { UserProvider } from "./context/user.context";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.querySelector("#root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<App />
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
