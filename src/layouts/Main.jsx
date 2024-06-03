import Navbar from "../components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
	return (
		<div>
			<Navbar />
			<div className="pt-24 max-w-screen-xl mx-auto min-h-[calc(100vh-197px)]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
