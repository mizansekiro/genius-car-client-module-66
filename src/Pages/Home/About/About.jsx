import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import "./About.css";

const About = () => {
	return (
		<div>
			<div className="hero mb-32">
				<div className="hero-content  p-0 flex-col lg:flex-row ">
					<div className=" w-1/2 relative pr-16">
						<div className="h-[473px] w-11/12">
							<img src={person} className="   rounded-lg shadow-2xl " />
						</div>
						<div className="w-[61%] left-[205px] absolute rounded-lg right-0 bottom-0 border-8 border-white">
							<img src={parts} className=" " />
						</div>
					</div>
					<div className="w-1/2 items-center">
						<h3 className="text-xl font-bold text-[#FF3811]">About Us</h3>
						<h1 className="text-5xl font-bold leading-[54px]">
							We are qualified <br />& of experience <br />
							in this field
						</h1>
						<div className="w-[489px] text-[#737373]">
							<p className="pt-6">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour, or randomised words which don't look even
								slightly believable.
							</p>
							<p className="pt-6">
								The majority have suffered alteration in some form, by injected
								humour, or randomised words which don't look even slightly
								believable.
							</p>
						</div>
						<button className="btn bg-[#FF3811] hover:bg-[#FF3811] mt-6 font-semibold  text-white ">
							Get More Info
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
