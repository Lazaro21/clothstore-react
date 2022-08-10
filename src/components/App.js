import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Checkout from "./routes/checkout/checkout.component";


const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route element={<Shop />} path="/shop" />
				<Route element={<Authentication />} path="/auth" />
				<Route element={<Checkout />} path='/checkout' />
			</Route>
		</Routes>
	);
};

export default App;
