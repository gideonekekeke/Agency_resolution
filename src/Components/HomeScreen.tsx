import React from "react";
import AgencyComp from "./AgencyComp/AgencyComp";
import Hero from "./Hero/Hero";
import SpecializationComp from "./SpecializationComp/SpecializationComp";

const HomeScreen = () => {
	return (
		<div>
			<Hero />
			<AgencyComp />
			<SpecializationComp />
		</div>
	);
};

export default HomeScreen;
