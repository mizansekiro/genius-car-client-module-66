import React from "react";
import "./BannerItem.css";

const BannerItem = ({ banner }) => {
	const { image, prev, id, next } = banner;
	return (
		<div id={`slide${id}`} className="carousel-item relative w-full  ">
			<div className="carousel-img w-full">
				<img
					src={image}
					className="w-full object-cover max-h-[600px] carousel-img"
				/>
			</div>
			<div
				className="absolute flex justify-end transform 
            -translate-y-0 left-28 top-[85px]"
			>
				<h1 className="text-6xl font-bold leading-[75px] text-white">
					Affordable <br />
					Price For Car <br />
					Servicing
				</h1>
			</div>
			<div className="absolute flex justify-end transform translate-y-0 left-28 top-[340px] w-2/5">
				<p className="text-lg text-white leading-8">
					There are many variations of passages of available, but the majority
					have suffered alteration in some form
				</p>
			</div>
			<div className="absolute flex justify-start transform -translate-y-0 left-28 top-[444px] w-[522px]">
				<button className="btn hover:bg-[#FF3811] bg-[#FF3811]  mr-5 text-white">
					Discover More
				</button>
				<button className="btn btn-outline hover:bg-[#FF3811] hover:border-none text-white">
					Latest Project
				</button>
			</div>
			<div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
				<a
					href={`#slide${prev}`}
					className="btn btn-outline text-white btn-circle hover:bg-[#FF3811] m-3"
				>
					❮
				</a>
				<a
					href={`#slide${next}`}
					className="btn btn-outline text-white btn-circle hover:bg-[#FF3811] m-3"
				>
					❯
				</a>
			</div>
		</div>
	);
};

export default BannerItem;
