import React from "react";

const TeamCard = ({ team }) => {
	const { title, img, price, prev, service_id, next } = team;
	return (
		<div id={`team${service_id}`} className="carousel-item">
			<div className="card bg-base-100 shadow-xl p-5 m-2 bottom-1 border border-[#E8E8E8]">
				<figure className="pb-5">
					<img className="h-[208.01px]" src={img} alt="Shoes" />
				</figure>
				<div className="card-body text-center p-0 mx-auto">
					<h2 className="card-title text-[#737373]">{title}</h2>
					<h2>Engine Expert</h2>

					<div className="card-actions mt-1 justify-center text-[#FF3811]"></div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;
