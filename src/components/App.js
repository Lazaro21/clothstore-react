import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
	return <div>I am The Shop</div>;
};

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route element={<Shop />} path="/shop" />
				<Route element={<SignIn />} path="/sign-in" />
			</Route>
		</Routes>
	);
};

export default App;
