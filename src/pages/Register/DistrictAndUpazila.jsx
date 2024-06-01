import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DistrictAndUpazila = () => {
	const { data = {}, isLoading } = useQuery({
		queryKey: ["district-upzila"],
		queryFn: async () => {
			const districtsResponse  = await axios.get("./districts.json");
			const upazilasResponse  = await axios.get("./upazilas.json");
			const districts = districtsResponse.data[2]?.data;
			const upazilas = upazilasResponse.data[2]?.data;
			return { districts, upazilas};
		},
	});

	const { districts, upazilas } = data;
	return { districts, upazilas, isLoading };
};

export default DistrictAndUpazila;
