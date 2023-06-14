import React from "react";
import checkoutImage from "../../assets/images/checkout/checkout.png";
import OrderForm from "../Shared/OrderServiceCommon/OrderForm/OrderForm";
import OrderBanner from "../Shared/OrderServiceCommon/OrderBanner/OrderBanner";

const CheckOut = () => {
	const checkoutBanner = {
		id: "01",
		image: checkoutImage,
		bannerHtag: "Check Out",
		breadHome: "Home",
		breadCheckout: "Checkout",
	};
	const checkoutData = {
		id: "02",
		leftInputTop: "First Name",
		rightInputTop: "Last Name",
		leftInputBottom: "Your Phone",
		rightInputBottom: "Your Email",
		textarea: "Your Message",
		btnText: "Order Confirm",
	};
	return (
		<div>
			<OrderBanner
				key={checkoutBanner.id}
				bannerData={checkoutBanner}
			></OrderBanner>
			<OrderForm key={checkoutData.id} formData={checkoutData}></OrderForm>
		</div>
	);
};

export default CheckOut;
