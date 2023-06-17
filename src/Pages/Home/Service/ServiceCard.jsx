import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
	const { title, img, price, _id } = service;
	return (
		<div className="card w-[364px] bg-base-100 shadow-xl p-5 bottom-1 border border-[#E8E8E8]">
			<figure className="pb-5  ">
				<img className="h-[208.01px]" src={img} alt="Shoes" />
			</figure>
			<div className="card-body p-0">
				<h2 className="card-title text-[#737373]">{title}</h2>

				<div className="card-actions justify-between text-[#FF3811]">
					<p>Price: ${price}</p>
					<Link to={`/checkout/${_id}`}>
						<button>
							<FaArrowRight />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
