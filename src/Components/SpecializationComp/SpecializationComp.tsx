import React from "react";
import styled from "styled-components";
import { IoTelescopeSharp } from "react-icons/io5";
const SpecializationComp = () => {
	return (
		<Container id='services'>
			<h1>Our Specialization</h1>
			<Stroke></Stroke>
			{/* <IconHold>
				<IoTelescopeSharp />
			</IconHold> */}
			<CardHolder>
				<Card>
					<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M24,-23.1C34.4,-19.8,48.5,-15.4,50.7,-8.2C52.8,-0.9,43.1,9.1,36.5,21.6C29.9,34,26.5,48.7,18.7,51.8C10.8,54.9,-1.5,46.3,-18.2,43.1C-34.9,40,-56.1,42.3,-60.3,34.8C-64.6,27.4,-52,10.2,-42,-0.6C-32,-11.5,-24.6,-16,-18,-20C-11.5,-23.9,-5.7,-27.4,0.5,-28C6.8,-28.6,13.5,-26.4,24,-23.1Z'
							transform='translate(100 100)'
						/>
					</svg>
					<Hold>
						{" "}
						<h2>Strategy & Research</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
							consectetur voluptatem, molestias consequuntur excepturi
							architecto facilis reiciendis veniam animi minus perferendis
							praesentium laborum placeat sed?
						</p>
					</Hold>
				</Card>
				<Card>
					<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M24,-23.1C34.4,-19.8,48.5,-15.4,50.7,-8.2C52.8,-0.9,43.1,9.1,36.5,21.6C29.9,34,26.5,48.7,18.7,51.8C10.8,54.9,-1.5,46.3,-18.2,43.1C-34.9,40,-56.1,42.3,-60.3,34.8C-64.6,27.4,-52,10.2,-42,-0.6C-32,-11.5,-24.6,-16,-18,-20C-11.5,-23.9,-5.7,-27.4,0.5,-28C6.8,-28.6,13.5,-26.4,24,-23.1Z'
							transform='translate(100 100)'
						/>
					</svg>
					<Hold>
						{" "}
						<h2>Strategy & Research</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
							consectetur voluptatem, molestias consequuntur excepturi
							architecto facilis reiciendis veniam animi minus perferendis
							praesentium laborum placeat sed?
						</p>
					</Hold>
				</Card>
				<Card>
					<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M24,-23.1C34.4,-19.8,48.5,-15.4,50.7,-8.2C52.8,-0.9,43.1,9.1,36.5,21.6C29.9,34,26.5,48.7,18.7,51.8C10.8,54.9,-1.5,46.3,-18.2,43.1C-34.9,40,-56.1,42.3,-60.3,34.8C-64.6,27.4,-52,10.2,-42,-0.6C-32,-11.5,-24.6,-16,-18,-20C-11.5,-23.9,-5.7,-27.4,0.5,-28C6.8,-28.6,13.5,-26.4,24,-23.1Z'
							transform='translate(100 100)'
						/>
					</svg>
					<Hold>
						{" "}
						<h2>Strategy & Research</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
							consectetur voluptatem, molestias consequuntur excepturi
							architecto facilis reiciendis veniam animi minus perferendis
							praesentium laborum placeat sed?
						</p>
					</Hold>
				</Card>
			</CardHolder>
		</Container>
	);
};

export default SpecializationComp;

const Hold = styled.div`
	margin-top: -50px;
`;

const IconHold = styled.div`
	color: black;
	position: absolute;
	top: 0;
	bottom: 0;
`;

const Card = styled.div`
	/* position: relative; */
	/* height: 300px; */
	width: 300px;
	background-color: white;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border-radius: 5px;
	margin-left: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;

	path {
		fill: #f7cbdd;

		:hover {
			fill: #ff0066;
			transition: all 350ms;
		}
	}
`;
const CardHolder = styled.div`
	margin-top: 50px;
	display: flex;
`;

const Stroke = styled.div`
	height: 10px;
	width: 250px;
	border-radius: 5px;
	background-image: linear-gradient(
		90deg,
		rgba(230, 37, 125, 1) 49%,
		rgba(242, 112, 4, 1) 94%
	);
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 20px;
`;
