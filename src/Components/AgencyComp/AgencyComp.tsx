import React from "react";
import styled from "styled-components";
import pic from "../assets/2.png";
const AgencyComp = () => {
	return (
		<Container id='about'>
			<First>
				<AgenImage src={pic} />
			</First>
			<Second>
				<h1>Why Our Agency</h1>
				<Stroke></Stroke>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
					provident beatae, repellat asperiores sequi error esse assumenda
					quibusdam cumque, alias non earum explicabo sit officiis dignissimos
					architecto accusantium natus dolore nobis blanditiis consequatur!
					Sunt, at!
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
					quaerat. Quos reiciendis officiis nulla beatae illo deleniti molestias
					distinctio eius?
				</p>

				<CardHold>
					{" "}
					<Card>
						<Numb>9875</Numb>
						<span>Satisfied Clients</span>
					</Card>
					<Card>
						<Numb>9875</Numb>
						<span>Satisfied Clients</span>
					</Card>
					<Card>
						<Numb>9875</Numb>
						<span>Satisfied Clients</span>
					</Card>
				</CardHold>
			</Second>
		</Container>
	);
};

export default AgencyComp;

const CardHold = styled.div`
	display: flex;
`;

const Numb = styled.div`
	font-size: 20px;
	font-weight: bold;
`;

const Card = styled.div`
	height: 100px;
	width: 150px;
	margin-right: 20px;

	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;

	h2 {
		margin-bottom: 5px;
	}
`;

const Stroke = styled.div`
	height: 10px;
	width: 200px;
	border-radius: 5px;
	background-image: linear-gradient(
		90deg,
		rgba(230, 37, 125, 1) 49%,
		rgba(242, 112, 4, 1) 94%
	);
`;

const AgenImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
const First = styled.div`
	height: 400px;
	margin: 10px;
`;
const Second = styled.div`
	margin: 10px;

	p {
		width: 500px;
		color: #1f2470;
	}

	h1 {
		color: #1f2470;
		font-weight: bold;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	/* align-items: center; */
`;
