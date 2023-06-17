import React, { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

const OrdersDetails = ({ order, handleCancelOrder, handleUpdateStatus }) => {
	const [loadData, setLoadData] = useState([]);
	const { _id, img, title, price, id, createdAt, orderDate, status } = order;
	console.log(_id);

	useEffect(() => {
		fetch(`http://localhost:5000/services/${id ? id : _id}`)
			.then((res) => res.json())
			.then((data) => {
				setLoadData(data);
			});
	}, []);
	console.log(loadData);
	return (
		<tr>
			<th>
				{status ? (
					<>
						<button className="btn    bg-[#FF3811] hover:bg-[#FF3811]  text-white">
							Approved
						</button>
					</>
				) : (
					<button
						onClick={() => handleCancelOrder(_id)}
						className="btn btn-ghost btn-circle text-3xl"
					>
						<FaTimesCircle />
					</button>
				)}
			</th>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="rounded w-24 ">
							<img
								src={loadData?.img ? loadData.img : img}
								alt="Avatar Tailwind CSS Component"
							/>
						</div>
					</div>
					<div>
						<div className="font-bold">
							{loadData?.title ? loadData.title : title}
						</div>
						<div className="text-sm opacity-50">United States</div>
						<div className="text-sm opacity-50">Size: M</div>
					</div>
				</div>
			</td>
			<td>
				${loadData?.price ? loadData.price : price}
				<br />
				<span className="badge badge-ghost badge-sm">
					Desktop Support Technician
				</span>
			</td>
			<td>
				{loadData?.createdAt
					? loadData.createdAt
					: createdAt
					? orderDate
					: orderDate}
			</td>
			<th>
				<button
					onClick={() => handleUpdateStatus(_id)}
					className="btn    bg-[#FF3811] hover:bg-[#FF3811]  text-white"
				>
					Click & Change Status
				</button>
			</th>
			{/* <div className="flex justify-between items-center">
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
				<div>
					<p className="card-title text-xl font-semibold text-[#444444]">
						22-02-23
					</p>
				</div>
				<div>
					<button className="btn bg-[#FF3811] hover:bg-[#FF3811]  text-white">
						Pending
					</button>
				</div>
			</div> */}
		</tr>
	);
};

export default OrdersDetails;
