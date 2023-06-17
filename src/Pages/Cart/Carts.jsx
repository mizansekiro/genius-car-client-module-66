import React from "react";
import OrderBanner from "../Shared/OrderServiceCommon/OrderBanner/OrderBanner";
import ordersImage from "../../assets/images/checkout/checkout.png";
import CartDetails from "./CartDetail";
import { Toaster } from "react-hot-toast";

const Carts = () => {
	const ordersBanner = {
		id: "01",
		image: ordersImage,
		bannerHtag: "Cart Details",
		breadHome: "Home",
		breadCheckout: "Product Details",
	};
	return (
		<div>
			<OrderBanner
				key={ordersBanner.id}
				bannerData={ordersBanner}
			></OrderBanner>

			<div>
				<p className="card-title text-xl font-semibold text-[#444444]">
					Total Orders:
				</p>
			</div>
			<div className="overflow-x-auto">
				<Toaster />
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Remove</th>
							<th>Service Name</th>
							<th>Price</th>
							<th>Order Date</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{/* {orders.map((order) => (
							<CartDetails></CartDetails>
						))} */}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Carts;
