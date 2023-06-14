import React, { useState } from "react";
import { FaRegTrashAlt, FaTimesCircle } from "react-icons/fa";
import cartImage from "../../../../assets/images/products/1.png";

const OrderForm = ({ formData }) => {
	const [color, setColor] = useState(
		"select btn-success text-white w-full max-w-xs"
	);

	const handleColor = (event) => {
		const form = event.target.value;
		console.log(form);
		if (form === "Rejected") {
			setColor("select btn-error text-white w-full ");
		}
		if (form === "Approved") {
			setColor("select btn-success text-white w-full ");
		}
	};
	const {
		leftInputTop,
		rightInputTop,
		leftInputBottom,
		rightInputBottom,
		textarea,
		btnText,
	} = formData;
	return (
		<div className=" border rounded-lg mx-auto p-20 mb-32 bg-[#F3F3F3]">
			<form>
				<div className="space-y-12">
					<div className="pb-6">
						<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<div className="mt-2">
									<input
										type="text"
										placeholder={leftInputTop}
										className="input input-bordered w-full "
									/>
								</div>
							</div>

							<div className="sm:col-span-3">
								<div className="mt-2">
									<input
										type="text"
										placeholder={rightInputTop}
										className="input input-bordered w-full "
									/>
								</div>
							</div>
							<div className="sm:col-span-3">
								<div className="mt-2">
									<input
										type="text"
										placeholder={leftInputBottom}
										className="input input-bordered w-full "
									/>
								</div>
							</div>

							<div className="sm:col-span-3">
								<div className="mt-2">
									<input
										type="text"
										placeholder={rightInputBottom}
										className="input input-bordered w-full "
									/>
								</div>
							</div>

							<div className="col-span-full">
								<div className="mt-2">
									<textarea
										className="textarea textarea-bordered w-full h-[250px]"
										placeholder={textarea}
									></textarea>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div>
					<button className="btn hover:bg-[#FF3811] bg-[#FF3811]  mr-5 text-white w-full">
						{btnText}
					</button>
				</div>
			</form>
			{/* cart item baniye raklam*/}
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
							src={cartImage}
							alt=""
						/>
					</div>
					<div>
						<h3 className="card-title text-xl font-semibold text-[#444444]">
							Mizanur Rahman
						</h3>
						<p className="text-[#A2A2A2]">Color: red</p>
						<p className="text-[#A2A2A2]">Size: M</p>
					</div>
				</div>
				<div>
					<p className="card-title text-xl font-semibold text-[#444444]">
						$25.00
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
				<div>
					<select onChange={handleColor} className={color}>
						<option disabled defaultValue>
							Choose
						</option>
						<option>Approved</option>
						<option>Rejected</option>
					</select>
				</div>
			</div>
			<div className="flex justify-between items-center text-[#444444]">
				<div className="flex justify-between items-center text-sm">
					<button className="btn btn-circle hover: p-2 text-sm">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6 fill-blue-500"
						>
							<path
								fillRule="evenodd"
								d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
								clipRule="evenodd"
							/>
						</svg>
					</button>

					<p className="ms-0">Continue Shopping</p>
				</div>
				<div className="flex justify-between items-center text-lg">
					<button className="btn btn-circle p-2 text-lg">
						<FaRegTrashAlt />
					</button>

					<p className="ms-0">Clear Shopping Cart</p>
				</div>
			</div>
		</div>
	);
};

export default OrderForm;
