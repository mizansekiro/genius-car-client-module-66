import React from "react";
import serviceImage from "../../assets/images/checkout/checkout.png";
import OrderBanner from "../Shared/OrderServiceCommon/OrderBanner/OrderBanner";
import OrderForm from "../Shared/OrderServiceCommon/OrderForm/OrderForm";

const AddNewService = () => {
	const serviceBanner = {
		id: "01",
		image: serviceImage,
		bannerHtag: "Add New Service",
		breadHome: "Home",
		breadCheckout: "Service",
	};
	const serviceData = {
		id: "02",
		leftInputTop: "Service Name",
		rightInputTop: "Service Price",
		leftInputBottom: "Your Phone",
		rightInputBottom: "Service Type",
		textarea: "Product Description",
		btnText: "Submit",
	};
	return (
		<div>
			<OrderBanner
				key={serviceBanner.id}
				bannerData={serviceBanner}
			></OrderBanner>
			<OrderForm key={serviceData.id} formData={serviceData}></OrderForm>
		</div>
	);
};

export default AddNewService;
