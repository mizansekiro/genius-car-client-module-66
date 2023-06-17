import React, { useEffect } from "react";
import checkoutImage from "../../assets/images/checkout/checkout.png";
import OrderForm from "../Shared/OrderServiceCommon/OrderForm/OrderForm";
import OrderBanner from "../Shared/OrderServiceCommon/OrderBanner/OrderBanner";
import { FaTimesCircle } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
	const { _id, title, img, price } = useLoaderData();

	const checkoutBanner = {
		id: "01",
		image: checkoutImage,
		bannerHtag: "Check Out",
		breadHome: "Home",
		breadCheckout: "Checkout",
	};
	const checkoutData = {
		id: "02",
		purpose: "checkout",
		leftInputTop: "First Name",
		rightInputTop: "Last Name",
		leftInputBottom: "Your Phone",
		rightInputBottom: "Your Email",
		textarea: "Your Message",
		btnText: "Order Confirm",
	};

	const handleCheckoutOrder = (event) => {
		event.preventDefault();
		const form = event.target;
		const firstName = form.leftInputTop.value;
		const lastName = form.rightInputTop.value;
		const phone = form.leftInputBottom.value;
		const email = form.rightInputBottom.value;
		const massage = form.textarea.value;

		const confirmOrderDetails = {
			id: _id,
			serviceName: title,
			servicePrice: price,
			orderDate: new Date().toString(),
			firstName,
			lastName,
			phone,
			email,
			massage,
		};
		console.log(confirmOrderDetails);

		fetch("http://localhost:5000/orders", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(confirmOrderDetails),
		})
			.then((res) => res.json())
			.then((order) => {
				if (order.acknowledged) {
					alert("Oreder korrechis ekhon muri kha");
					form.reset();
				}
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<OrderBanner
				key={checkoutBanner.id}
				bannerData={checkoutBanner}
			></OrderBanner>
			<div className="flex justify-between items-center">
				<div className="flex justify-between items-center">
					<div className="">
						<button className="btn btn-ghost btn-circle text-3xl">
							<FaTimesCircle />
						</button>
					</div>
					<div>
						<img
							className=" border rounded-lg w-[100px] bg-red-500 m-5"
							src={img}
							alt=""
						/>
					</div>
					<div>
						<h3 className="card-title text-xl font-semibold text-[#444444]">
							{title}
						</h3>
						<p className="text-[#A2A2A2]">Color: red</p>
						<p className="text-[#A2A2A2]">Size: M</p>
					</div>
				</div>
				<div>
					<p className="card-title text-xl font-semibold text-[#444444]">
						${price}
					</p>
				</div>
			</div>
			<OrderForm
				key={checkoutData.id}
				formData={checkoutData}
				handleInputForm={handleCheckoutOrder}
			></OrderForm>
		</div>
	);
};

export default CheckOut;
