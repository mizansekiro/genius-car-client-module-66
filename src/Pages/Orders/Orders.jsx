import React, { useContext, useEffect, useState } from "react";

import ordersImage from "../../assets/images/checkout/checkout.png";
import OrderBanner from "../Shared/OrderServiceCommon/OrderBanner/OrderBanner";
import { AuthContext } from "../../Context/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import OrdersDetails from "./OrdersDetails";

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const { user } = useContext(AuthContext);
	const [status, setStatus] = useState("");

	/////////////////////////////////////
	const [color, setColor] = useState(
		"select btn-success text-white w-full max-w-xs"
	);
	const handleColor = (event) => {
		const form = event.target.value;
		console.log(form);
		console.log(form);
		if (form === "Pending") {
			setStatus("");
			setColor("select btn-error text-white w-full ");
		}
		if (form === "Approved") {
			setColor("select btn-success text-white w-full ");
			setStatus(form);
		}
	};
	//////////////////////////////////////
	console.log(orders);

	useEffect(() => {
		fetch(`http://localhost:5000/orders?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, [user?.email]);

	const handleCancelOrder = (id) => {
		const deleteConfirmed = confirm(`Do you really want to Delete this`);
		if (deleteConfirmed) {
			fetch(`http://localhost:5000/orders/${id}`, { method: "DELETE" })
				.then((res) => res.json())
				.then((data) => {
					console.log(data.deletedCount);
					if (data.deletedCount > 0) {
						toast.success("Successfully Delete!");
						const remainingOrders = orders.filter((ord) => ord._id !== id);
						console.log(remainingOrders);
						setOrders(remainingOrders);
					}
				});
		}
	};

	const handleUpdateStatus = (id) => {
		fetch(`http://localhost:5000/orders/${id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ status }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast.success(status ? status : "Pending");
					const remaingOrders = orders.filter((odr) => odr._id !== id);
					const approvingOrder = orders.find((odr) => odr._id === id);
					approvingOrder.status = status;
					const newOrders = [...remaingOrders, approvingOrder];
					setOrders(newOrders);
				}
			});
	};

	const ordersBanner = {
		id: "01",
		image: ordersImage,
		bannerHtag: "Manage All Orders",
		breadHome: "Home",
		breadCheckout: "All Orders",
	};

	return (
		<div>
			<OrderBanner
				key={ordersBanner.id}
				bannerData={ordersBanner}
			></OrderBanner>
			<div className="w-[10%] mb-3">
				<p>Select status</p>
				<select onChange={handleColor} className={color}>
					<option disabled defaultValue>
						Choose
					</option>
					<option>Approved</option>
					<option>Pending</option>
				</select>
			</div>
			<div>
				<p className="card-title text-xl font-semibold text-[#444444]">
					Total Orders: {orders.length}
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
						{orders.map((order) => (
							<OrdersDetails
								key={order._id}
								order={order}
								handleCancelOrder={handleCancelOrder}
								handleUpdateStatus={handleUpdateStatus}
							></OrdersDetails>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Orders;
