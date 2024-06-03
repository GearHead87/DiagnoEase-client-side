import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TestDetails = () => {
	const axiosSecure = useAxiosSecure();
	const { id } = useParams();
	const {
		data: test = {},
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["test", id],
		queryFn: async () => {
			const { data } = await axiosSecure.get(`/test/${id}`);
			return data;
		},
	});
	console.log(test);
	return (
		<div>
			<div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<div>
					<img
						className="rounded-t-lg  object-cover w-full h-full"
						src={test.image}
						alt=""
					/>
				</div>
				<div className="p-5 flex flex-col justify-between items-center">
					{/* Top Information */}
					<div>
						<div>
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{test.name}
							</h5>
						</div>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							{test.description}
						</p>
						<div className="my-4">
							<span className="bg-blue-100 text-blue-800 text-base font-semibold px-2.5 py-1 rounded dark:bg-blue-200 dark:text-blue-800">
								Price: ${test.price}
							</span>
							<span className="bg-red-100 text-red-800 text-base font-semibold px-2.5 py-1 rounded dark:bg-red-200 dark:text-red-800 ml-4">
								Available Slots: {test.slots}
							</span>
						</div>
					</div>
					{/* Bottom Button */}
					<div>
						<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Book Now
							<svg
								className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 10"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 5h12m0 0L9 1m4 4L9 9"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestDetails;
