import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { FaUserCog } from "react-icons/fa";

const AdminMenu = () => {
	return (
		<>
			<MenuItems
				address="statistics"
				label="Statistics"
				icon={FaUserCog}
			></MenuItems>
			<MenuItems
				address="manage-users"
				label="All Users"
				icon={FaUserCog}
			></MenuItems>
			<MenuItems
				address="add-a-test"
				label="Add a test"
				icon={FaUserCog}
			></MenuItems>
			<MenuItems
				address="all-tests"
				label="All tests"
				icon={FaUserCog}
			></MenuItems>
			<MenuItems
				address="all-reservations"
				label="Reservation"
				icon={FaUserCog}
			></MenuItems>
			<MenuItems
				address="add-banner"
				label="Add banner"
				icon={FaUserCog}
			></MenuItems>
			<MenuItems
				address="all-banners"
				label="All Banners"
				icon={FaUserCog}
			></MenuItems>
		</>
	);
};

export default AdminMenu;
