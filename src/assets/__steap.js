<div className="card w-[364px] bg-base-100 shadow-xl p-5 m-5 bottom-1 border border-[#E8E8E8] carousel-item   ">
	<figure className="pb-5  ">
		<img className="h-[208.01px]" src={img} alt="Shoes" />
	</figure>
	<div className="card-body p-0 mx-auto">
		<h2 className="card-title text-[#737373]">{title}</h2>
		<h2>Engine Expert</h2>

		<div className="card-actions mt-1 justify-center text-[#FF3811]"></div>
	</div>
</div>;

{
	/* <div>
					{teams.map((team) => (
						<>
							<div
								key={team._id}
								className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
							>
								<a href={`#team${team.prev}`} className="btn btn-circle">
									❮
								</a>
								<a href={`#team${team.next}`} className="btn btn-circle">
									❯
								</a>
							</div>
						</>
					))}
				</div> */
}

<div className="flex justify-center items-center">
	{teams.map((team) => (
		<TeamCard key={team._id} team={team}></TeamCard>
	))}
</div>;

const checkoutData = {
	leftInputTop: "First Name",
	rightInputTop: "Last Name",
	leftInputBottom: "Your Phone",
	rightInputBottom: "Your Email",
	textarea: "Your Message",
	btnText: "Order Confirm",
};
