import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";
import useAuth from "../hooks/useAuth";

import Lottie from "lottie-react";
import loadingAnimation from "./loadingSpinner.json";
// import SideNav from "../components/dashboard/Sidebar/SideNav";
const style = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "100vh",
};

const DashboardLayout = () => {
	const { loading } = useAuth();

	if (loading) {
		return (
			<>
				<Lottie animationData={loadingAnimation} style={style} />
			</>
		);
	}
	return (
		<div className="relative min-h-screen md:flex">
			{/* Sidebar */}
			<Sidebar />
			{/* <SideNav></SideNav> */}

			{/* Outlet --> Dynamic content */}
			<div className="flex-1 md:ml-64">
				<div className="p-5">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
