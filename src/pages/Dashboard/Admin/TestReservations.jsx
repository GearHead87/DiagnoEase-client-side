import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import TestReservationsRow from "../../../components/dashboard/Sidebar/TableRows/TestReservationsRow";

const TestReservations = () => {
	const { id: testId } = useParams();
	const axiosSecure = useAxiosSecure();
	const {
		data = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["test-reservations"],
		queryFn: async () => {
			const { data } = await axiosSecure.get(`/appointments/${testId}`);
			return data;
		},
	});

	if (isLoading) {
		<LoadingSpinner></LoadingSpinner>;
	}

	return (
		<div>
			{" "}
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								User Name
							</th>
							<th scope="col" className="px-6 py-3">
								User Email
							</th>
							<th scope="col" className="px-6 py-3">
								Test Name
							</th>
							<th scope="col" className="px-6 py-3">
								Test Price
							</th>
							<th scope="col" className="px-6 py-3">
								Test Date
							</th>
							<th scope="col" className="px-6 py-3">
								Test Status
							</th>
							<th scope="col" className="px-6 py-3">
								<span className="sr-only">Report</span>
							</th>
							<th scope="col" className="px-6 py-3">
								<span className="sr-only">Cancle</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map((app) => (
							<TestReservationsRow key={app._id} app={app} refetch={refetch} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TestReservations;
