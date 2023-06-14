import React, { useEffect, useState } from "react";
import TestimonialCards from "./TestimonialCards";

const Testimonial = () => {
	const [testimonials, setTestimonials] = useState([]);
	useEffect(() => {
		fetch("services.json")
			.then((res) => res.json())
			.then((data) => setTestimonials(data));
	}, []);

	return (
		<div className="mb-32">
			<div className="text-center  mx-auto mb-12">
				<h3 className="text-xl font-bold text-[#FF3811]">Testimonial</h3>
				<h1 className="text-5xl font-bold leading-[54px]">
					What Customer Says
				</h1>

				<p className="text-[#737373] mt-2 ">
					<small>
						The majority have suffered alteration in some form, by injected
						humour, or randomised <br />
						words which don't look even slightly believable.
					</small>
				</p>
			</div>
			<div className="relative carousel ">
				<div className="carousel ">
					{testimonials.map((testimonial) => (
						<TestimonialCards
							kay={testimonial._id}
							testimonial={testimonial}
						></TestimonialCards>
					))}
				</div>
				<div>
					{testimonials.map((testimonial) => (
						<>
							<div
								key={testimonial._id}
								className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
							>
								<a
									href={`#test${testimonial.prev}`}
									className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
								>
									❮
								</a>
								<a
									href={`#test${testimonial.next}`}
									className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
								>
									❯
								</a>
							</div>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
