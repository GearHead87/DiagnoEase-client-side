import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { Link } from "react-router-dom";

const Banner = () => {
	const axiosCommon = useAxiosCommon();
	const { data: banner = {}, isLoading } = useQuery({
		queryKey: ["Active-banner"],
		queryFn: async () => {
			const { data } = await axiosCommon.get("/active-banner");
			return data;
		},
	});
	// console.log(banner);
	if (isLoading) {
		return <LoadingSpinner />;
	}
	return (
		<>
			<section className="relative overflow-hidden rounded-xl">
      <img
        src={banner.image}
        alt="Banner background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              {banner.title}
            </h1>
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-xl text-gray-300">
              {banner.text}
            </p>
            <div className="mt-10">
              <Link
                href="/tests"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                All Tests
                <svg
									className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end space-y-4">
            <div className="text-center lg:text-right">
              <p className="text-xl font-medium text-white">Apply Coupon Code</p>
              <p className="mt-2 text-3xl font-bold text-white bg-opacity-50 bg-gray-700 px-4 py-2 rounded-md inline-block">
                {banner.couponCode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
		</>
	);
};

export default Banner;
