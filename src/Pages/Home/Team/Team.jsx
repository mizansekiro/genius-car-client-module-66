import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
	const [teams, setTeams] = useState([]);
	useEffect(() => {
		fetch("services.json")
			.then((res) => res.json())
			.then((data) => setTeams(data));
	}, []);
	return (
		<div className="mb-32 ">
			<div className="text-center  mx-auto mb-12">
				<h3 className="text-xl font-bold text-[#FF3811]">Team</h3>
				<h1 className="text-5xl font-bold leading-[54px]">Meet Our Team</h1>

				<p className="text-[#737373] mt-2 ">
					<small>
						The majority have suffered alteration in some form, by injected
						humour, or randomised <br />
						words which don't look even slightly believable.
					</small>
				</p>
			</div>
			<div className=" mb-12 carousel relative ">
				<div className="carousel ">
					{teams.map((team) => (
						<TeamCard key={team._id} team={team}></TeamCard>
					))}
				</div>
				<div>
					{teams.map((team) => (
						<>
							<div
								key={team._id}
								className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
							>
								<a
									href={`#team${team.prev}`}
									className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
								>
									❮
								</a>
								<a
									href={`#team${team.next}`}
									className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
								>
									❯
								</a>
							</div>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default Team;
