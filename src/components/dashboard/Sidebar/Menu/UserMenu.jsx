import { Link } from "react-router-dom";
import { FaUserCog } from 'react-icons/fa'
import MenuItems from "./MenuItems";

const UserMenu = () => {
	return (
		<>
			<MenuItems
				address="user-appointments"
				label="My Upcoming Appointments"
                icon={FaUserCog}
			></MenuItems>

			<MenuItems
				address="user-test-results"
				label="Test results"
                icon={FaUserCog}
			></MenuItems>
            
			<MenuItems
				address="user-profile"
				label="My Profile"
                icon={FaUserCog}
			></MenuItems>

		</>
	);
};

export default UserMenu;
