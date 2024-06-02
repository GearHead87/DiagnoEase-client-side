import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { bloodGroup } from "./bloodGroupData";
import DistrictAndUpazila from "./DistrictAndUpazila";
import { imageUpload } from "../../api/utils";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { Link } from "react-router-dom";
const Register = () => {
	const { register, handleSubmit } = useForm();
	const { createUser, updateUserProfile } = useAuth();
	const { districts, upazilas, isLoading } = DistrictAndUpazila();
	const axiosCommon = useAxiosCommon();

	const onSubmit = async (data) => {
		const name = data.name;
		const email = data.email;
		const password = data.password;
		const image = data.image[0];
		const bloodGroup = data.bloodGroup;
		const district = data.district;
		const upazila = data.upazila;
		const status = "active";
		const role = "user";
		let userData = {
			name,
			email,
			bloodGroup,
			district,
			upazila,
			status,
			role,
		};

		try {
			const { result } = await createUser(email, password);
			console.log(result);
			const avatar = await imageUpload(image);
			userData["avatar"] = avatar;
			console.log(userData);
			await updateUserProfile(name, avatar);
			const { data } = await axiosCommon.post("/user", userData);
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};
	if (isLoading) {
		return <p>loadding.......</p>;
	}
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Your email
					</label>
					<input
						{...register("email")}
						type="email"
						id="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name@flowbite.com"
						required
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="name"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Your name
					</label>
					<input
						{...register("name")}
						type="text"
						id="name"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name"
						required
					/>
				</div>
				<div className="mb-5">
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="user_avatar"
					>
						Upload file
					</label>
					<input
						{...register("image")}
						className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						aria-describedby="user_avatar_help"
						id="user_avatar"
						type="file"
					></input>
				</div>
				<div className="mb-5">
					<label
						htmlFor="blood-group"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Select your blood group
					</label>
					<select
						{...register("bloodGroup")}
						id="blood-group"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						{bloodGroup.map((bg) => (
							<option key={bg.id} value={bg.type}>
								{bg.type}
							</option>
						))}
					</select>
				</div>
				<div className="mb-5">
					<label
						htmlFor="district"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Select your District
					</label>
					<select
						{...register("district")}
						id="district"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						{districts.map((district) => (
							<option key={district.id} value={district.name}>
								{district.name}
							</option>
						))}
					</select>
				</div>
				<div className="mb-5">
					<label
						htmlFor="upazila"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Select your Upazila
					</label>
					<select
						{...register("upazila")}
						id="upazila"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						{upazilas.map((upzila) => (
							<option key={upzila.id} value={upzila.name}>
								{upzila.name}
							</option>
						))}
					</select>
				</div>
				<div className="mb-5">
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Your password
					</label>
					<input
						{...register("password")}
						type="password"
						id="password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="confirm-password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Confirm Password
					</label>
					<input
						// {...register("password")}
						type="password"
						id="confirm-password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>

				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Register
				</button>
				<div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-4">
					Already Have an Account?{" "}
					<Link
						to={"/login"}
						className="text-blue-700 hover:underline dark:text-blue-500"
					>
						Login
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
