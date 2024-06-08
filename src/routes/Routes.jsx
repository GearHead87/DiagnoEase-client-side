import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Register from "../pages/Register/Register";
import UserProfile from "../pages/Dashboard/User/UserProfile";
import UserAppointments from "../pages/Dashboard/User/UserAppointments";
import UserTestResults from "../pages/Dashboard/User/UserTestResults";
import AddATest from "../pages/Dashboard/Admin/AddATest";
import AdminRoute from "./AdminRoute";
import AllTests from "../pages/Dashboard/Admin/AllTests";
import AllReservations from "../pages/Dashboard/Admin/AllReservations";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AddBanner from "../pages/Dashboard/Admin/AddBanner";
import AllBanners from "../pages/Dashboard/Admin/AllBanners";
import AdminStatistics from "../pages/Dashboard/Admin/AdminStatistics";
import Tests from "../pages/Common/Tests/Tests";
import TestDetails from "../pages/Common/Tests/TestDetails";
import TestReservations from "../pages/Dashboard/Admin/TestReservations";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
			{
				path: "tests",
				element: <Tests></Tests>,
			},
			{
				path: "test/:id",
				element: (
					<PrivateRoute>
						<TestDetails></TestDetails>
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "dashboard",
		element: <DashboardLayout></DashboardLayout>,
		children: [
			// user Routes
			{
				path: "user-profile",
				element: <UserProfile></UserProfile>,
			},
			{
				path: "user-appointments",
				element: <UserAppointments></UserAppointments>,
			},
			{
				path: "user-test-results",
				element: <UserTestResults></UserTestResults>,
			},
			// Admin Routes
			{
				path: "manage-users",
				element: (
					<AdminRoute>
						<ManageUsers></ManageUsers>
					</AdminRoute>
				),
			},
			{
				path: "add-a-test",
				element: (
					<AdminRoute>
						<AddATest></AddATest>
					</AdminRoute>
				),
			},
			{
				path: "all-tests",
				element: (
					<AdminRoute>
						<AllTests></AllTests>
					</AdminRoute>
				),
			},
			{
				path: "all-reservations",
				element: (
					<AdminRoute>
						<AllReservations></AllReservations>
					</AdminRoute>
				),
			},
			{
				path: "all-reservations/:id",
				element: (
					<AdminRoute>
						<TestReservations></TestReservations>
					</AdminRoute>
				),
			},
			{
				path: "add-banner",
				element: (
					<AdminRoute>
						<AddBanner></AddBanner>
					</AdminRoute>
				),
			},
			{
				path: "all-banners",
				element: (
					<AdminRoute>
						<AllBanners></AllBanners>
					</AdminRoute>
				),
			},
			{
				path: "statistics",
				element: (
					<AdminRoute>
						<AdminStatistics></AdminStatistics>
					</AdminRoute>
				),
			},
		],
	},
]);
