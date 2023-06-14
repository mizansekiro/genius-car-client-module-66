import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("services.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<div className="mb-12">
			<div className="text-center w-1/2 mx-auto mb-12">
				<h3 className="text-xl font-bold text-[#FF3811]">Popular Products</h3>
				<h1 className="text-5xl font-bold leading-[54px]">
					Browse Our Products
				</h1>

				<p className="text-[#737373] mt-2">
					<small>
						The majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable.
					</small>
				</p>
			</div>
			<div className="grid grid-cols-3 gap-5 mb-12">
				{products.map((product) => (
					<ProductCard key={product._id} product={product}></ProductCard>
				))}
			</div>
			<div className="text-center">
				<button className="btn btn-outline border-[#FF3811] hover:bg-[#FF3811] hover:border-none hover:text-white text-[#FF3811]">
					More Product
				</button>
			</div>
		</div>
	);
};

export default Products;
