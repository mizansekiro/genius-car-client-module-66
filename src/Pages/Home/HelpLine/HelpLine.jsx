import React from "react";
import { FaHeadset, FaMapMarkedAlt, FaRegCalendarAlt } from "react-icons/fa";

const HelpLine = () => {
	return (
		<div className="flex justify-around items-center h-[250px] bg-[#151515] text-white mb-32 rounded-lg">
			<div className="flex justify-center items-center">
				<span className="mr-5 text-5xl text-[#FF3811]">
					<FaRegCalendarAlt />
				</span>
				<div>
					<p>We are open monday-friday</p>
					<p className="font-bold text-2xl">7:00 am - 9:00 pm</p>
				</div>
			</div>
			<div className="flex justify-center items-center ">
				<span className="mr-5 text-5xl text-[#FF3811]">
					<FaHeadset />
				</span>
				<div>
					<p>Have a question?</p>
					<p className="font-bold text-2xl">+2546 251 2658</p>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<span className="mr-5 text-5xl text-[#FF3811]">
					<FaMapMarkedAlt />
				</span>
				<div>
					<p>Need a repair? our address</p>
					<p className="font-bold text-2xl">Liza Street, New York</p>
				</div>
			</div>
		</div>
	);
};

export default HelpLine;
