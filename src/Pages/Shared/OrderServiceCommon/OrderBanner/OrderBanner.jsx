import React from "react";

import "./OrderBanner.css";

const OrderBanner = ({ bannerData }) => {
	const { image, bannerHtag, breadHome, breadCheckout } = bannerData;
	return (
		<div className="hero w-full mt-16 mb-32">
			<div className=" relative w-full ">
				<div className="carousel-img w-full">
					<img
						src={image}
						className="w-full object-cover max-h-[600px] carousel-img"
					/>
				</div>
				<div className="absolute flex justify-end  left-28 top-[123px]">
					<h1 className="text-6xl font-bold leading-[75px] text-white">
						{bannerHtag}
					</h1>
				</div>

				<div className="absolute  flex justify-center items-center  left-[40%] bottom-0 ">
					<div className="trapezoid relative">
						<div className="absolute flex justify-center items-center">
							<div className=" text-sm breadcrumbs p-4 text-white ">
								<ul>
									<li>
										<a>{breadHome}</a>
									</li>
									<li>
										<a>{breadCheckout}</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderBanner;
