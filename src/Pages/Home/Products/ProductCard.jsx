import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
	const { title, img, rating, price } = product;
	return (
		<div className="card w-[364px] bg-base-100 shadow-xl p-5 bottom-1 border border-[#E8E8E8] text-center">
			<figure className="pb-5  ">
				<img className="h-[208.01px]" src={img} alt="Shoes" />
			</figure>
			<div className="flex justify-center text-[#FF3811] mb-1">
				<span className="p-[0.5px]">
					<FaStar />
				</span>
				<span className="p-[0.5px]">
					<FaStar />
				</span>
				<span className="p-[0.5px]">
					<FaStar />
				</span>
				<span className="p-[0.5px]">
					<FaStar />
				</span>
				<span className="p-[0.5px]">
					<FaStar />
				</span>
			</div>
			<div className="card-body p-0 mx-auto">
				<h2 className="card-title text-[#737373]">{title}</h2>

				<div className="card-actions justify-between text-[#FF3811]">
					<p>Price: ${price}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
