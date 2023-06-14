import React from "react";
import groupIcon from "../../../assets/icons/group.svg";
import wrenchIcon from "../../../assets/icons/Wrench.svg";
import deliveryIcon from "../../../assets/icons/deliveryt.svg";
import personIcon from "../../../assets/icons/person.svg";
import checkIcon from "../../../assets/icons/check.svg";

const CoreFeatures = () => {
	return (
		<div className="mb-32">
			<div className="text-center  mx-auto mb-12">
				<h3 className="text-xl font-bold text-[#FF3811]">Core Features</h3>
				<h1 className="text-5xl font-bold leading-[54px]">Why Choose Us</h1>

				<p className="text-[#737373] mt-2 ">
					<small>
						The majority have suffered alteration in some form, by injected
						humour, or randomised <br />
						words which don't look even slightly believable.
					</small>
				</p>
			</div>
			<div className="flex justify-between items-center">
				<div className="card w-[170px] h-[156px] items-center hover:bg-[#FF3811] hover:text-white border py-7 px-4">
					<img className="w-[60px] h-[60px] pb-4" src={groupIcon} alt="" />
					<h2 className="card-title text-[#737373]">Expert Team</h2>
				</div>
				<div className="card w-[170px] h-[156px] items-center hover:bg-[#FF3811] hover:text-white border py-7 px-4">
					<img className="w-[60px] h-[60px] pb-4" src={checkIcon} alt="" />
					<h2 className="card-title text-[#737373]">Expert Team</h2>
				</div>
				<div className="card w-[170px] h-[156px] items-center hover:bg-[#FF3811] hover:text-white border py-7 px-4">
					<img className="w-[60px] h-[60px] pb-4" src={personIcon} alt="" />
					<h2 className="card-title text-[#737373]">Expert Team</h2>
				</div>
				<div className="card w-[170px] h-[156px] items-center hover:bg-[#FF3811] hover:text-white border py-7 px-4">
					<img className="w-[60px] h-[60px] pb-4" src={wrenchIcon} alt="" />
					<h2 className="card-title text-[#737373]">Expert Team</h2>
				</div>
				<div className="card w-[170px] h-[156px] items-center hover:bg-[#FF3811] hover:text-white border py-7 px-4">
					<img className="w-[60px] h-[60px] pb-4" src={checkIcon} alt="" />
					<h2 className="card-title text-[#737373]">Expert Team</h2>
				</div>
				<div className="card w-[170px] h-[156px] items-center hover:bg-[#FF3811] hover:text-white border py-7 px-4">
					<img className="w-[60px] h-[60px] pb-4" src={deliveryIcon} alt="" />
					<h2 className="card-title text-[#737373]">Expert Team</h2>
				</div>
			</div>
		</div>
	);
};

export default CoreFeatures;
