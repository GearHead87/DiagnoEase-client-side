import React from "react";
import useAxiosSecure from "./useAxiosSecure";

const useUserData = ({email}) => {
    const axiosSecure = useAxiosSecure();
	const {
		data,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["users",email],
		queryFn: async () => {
			const { data } = await axiosSecure(`/user/${email}`);
			return data;
		},
	});
    console.log(data);
	return {user:data};
};

export default useUserData;
