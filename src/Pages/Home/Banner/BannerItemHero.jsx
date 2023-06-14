import React from "react";

const BannerItemHero = ({ banner }) => {
	const { image, prev, id, next } = banner;
	return (
		<div id={`slide${id}`} className="carousel-item relative w-full">
			<div className="hero justify-items-start min-h-screen">
				<img
					className="w-full object-cover max-h-[600px] carousel-img"
					src={image}
					alt=""
				/>
				<div className="carousel-img"></div>
				<div className="hero-content ms-32 text-neutral-content">
					<div className="max-w-md">
						<h1 className="text-6xl font-bold leading-[75px] text-white">
							Affordable <br />
							Price For Car <br />
							Servicing
						</h1>
						<p className="text-lg text-white leading-8 my-12 ">
							There are many variations of passages of available, but the
							majority have suffered alteration in some form
						</p>
						<button className="btn hover:bg-[#FF3811] bg-[#FF3811]  mr-5 text-white">
							Discover More
						</button>
						<button className="btn btn-outline hover:bg-[#FF3811] hover:border-none text-white">
							Latest Project
						</button>
					</div>
				</div>
			</div>
			<div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
				<a
					href={`#slide${prev}`}
					className="btn btn-outline text-white btn-circle hover:bg-[#FF3811] mr-5"
				>
					❮
				</a>
				<a
					href={`#slide${next}`}
					className="btn btn-outline text-white btn-circle hover:bg-[#FF3811] mr-5"
				>
					❯
				</a>
			</div>
		</div>
	);
};

export default BannerItemHero;
