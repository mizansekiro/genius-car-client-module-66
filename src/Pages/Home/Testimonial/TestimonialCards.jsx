import React from "react";
import { FaStar } from "react-icons/fa";
import quoteIcon from "../../../assets/icons/quote.svg";
import "./Testimonial.css";

const TestimonialCards = ({ testimonial }) => {
	const { title, img, price, prev, service_id, next } = testimonial;
	return (
		<div id={`team${service_id}`} className="carousel-item w-1/2 h-[349px]">
			<div className="card  bg-base-100 shadow-xl p-8 bottom-1 m-5 border border-[#E8E8E8]">
				<div className="flex justify-between items-center">
					<div className="flex justify-center items-center">
						<img className="w-16 h-16 rounded-full" src={img} alt="Burger " />
						<div className=" text-[#737373] ms-5">
							<h2 className="card-title text-2lg">{title}</h2>
							<p>Businessman</p>
						</div>
					</div>
					<img className="w-16 h-16 svg-color" src={quoteIcon} alt="" />
				</div>
				<p className=" text-[#737373] mt-5">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly believable.
				</p>
				<div className="flex justify-start text-[#FF3811] mb-1 mt-5">
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
			</div>
		</div>
	);
};

export default TestimonialCards;
