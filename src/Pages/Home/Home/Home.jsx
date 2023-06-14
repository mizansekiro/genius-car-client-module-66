import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Service/Services";
import Products from "../Products/Products";
import HelpLine from "../HelpLine/HelpLine";
import Team from "../Team/Team";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<About></About>
			<Services></Services>
			<HelpLine></HelpLine>
			<Products></Products>
			<Team></Team>
			<CoreFeatures></CoreFeatures>
			<Testimonial></Testimonial>
		</div>
	);
};

export default Home;
