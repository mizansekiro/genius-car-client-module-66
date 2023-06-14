import React from "react";
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";
import BannerItem from "./BannerItem";
import BannerItemHero from "./BannerItemHero";

const bannerData = [
	{
		image: banner1,
		prev: 6,
		id: 1,
		next: 2,
	},
	{
		image: banner2,
		prev: 1,
		id: 2,
		next: 3,
	},
	{
		image: banner3,
		prev: 2,
		id: 3,
		next: 4,
	},
	{
		image: banner4,
		prev: 3,
		id: 4,
		next: 5,
	},
	{
		image: banner5,
		prev: 4,
		id: 5,
		next: 6,
	},
	{
		image: banner6,
		prev: 5,
		id: 6,
		next: 1,
	},
];

const Banner = () => {
	return (
		<>
			<div className="carousel w-full mb-32 mt-10 rounded-[10px] max-h-[600px">
				{bannerData.map((banner) => (
					<>
						<BannerItem key={banner.id} banner={banner}></BannerItem>
					</>
				))}
			</div>
			{/* <div className="carousel w-full mt-12 rounded-[10px] max-h-[600px">
				{bannerData.map((banner) => (
					<>
						<BannerItemHero key={banner.id} banner={banner}></BannerItemHero>
					</>
				))}
			</div> */}
		</>
	);
};

export default Banner;
