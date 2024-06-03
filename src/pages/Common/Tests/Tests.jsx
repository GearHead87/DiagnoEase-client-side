import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import TestCard from "../../../components/dashboard/Home/TestCard";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const Tests = () => {
	const axiosCommon = useAxiosCommon();
	const {
		data: tests = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["tests"],
		queryFn: async () => {
			const { data } = await axiosCommon("/tests");
			return data;
		},
	});
	if (isLoading) {
		<LoadingSpinner />;
	}
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
			{tests.map((test) => (
				<TestCard key={test._id} test={test} />
			))}
		</div>
	);
};

export default Tests;
