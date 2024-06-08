import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Nav = () => {
	const { user, logOut } = useAuth();
	return (
		<Navbar fluid rounded>
			<Navbar.Brand>
				{/* <img
					src="/favicon.svg"
					className="mr-3 h-6 sm:h-9"
					alt="Flowbite React Logo"
				/> */}
				<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
					DiagnoEase
				</span>
			</Navbar.Brand>
			<div className="flex md:order-2">
				{user ? (
					<>
						<Link
							to={"dashboard"}
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mr-4 px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Dashboard
						</Link>
						<button
							onClick={() => logOut()}
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Logout
						</button>
					</>
				) : (
					<>
						<Link
							to={"/login"}
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Login
						</Link>
					</>
				)}
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				
				<NavLink
					active
					to={"/"}
					className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
				>
					Home
				</NavLink>
				<NavLink
					to={"/tests"}
					className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
				>
					All Tests
				</NavLink>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Nav;
