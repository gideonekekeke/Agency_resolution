import React from "react";
import styled from "styled-components";
import pic from "../assets/1.png";
const Hero = () => {
	return (
		<Container id='home'>
			<Wrapper>
				<svg
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 120'
					preserveAspectRatio='none'>
					<path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'></path>
				</svg>
			</Wrapper>
			<Content>
				<First>
					<h5>We are Web Developers from Nigeria</h5>
					<h1>We build and Deploy websites that Users Love</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
						laboriosam. Ad quas odio quibusdam iure reiciendis sapiente, rerum
						ducimus perspiciatis.
					</p>
					<Button>Learn More</Button>
				</First>
				<Second>
					<HeroImage src={pic} />
				</Second>
			</Content>
		</Container>
	);
};

export default Hero;

const HeroImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const Button = styled.div`
	height: 50px;
	width: 150px;
	margin-left: 10px;
	margin-right: 10px;
	background-image: linear-gradient(
		90deg,
		rgba(230, 37, 125, 1) 49%,
		rgba(242, 112, 4, 1) 94%
	);
	display: flex;
	justify-content: center;
	align-items: center;
	/* border-radius: 0px 20px 0px 20px; */
	border-top-right-radius: 20px;
	border-bottom-left-radius: 20px;
	cursor: pointer;
	transition: all 350ms;

	:hover {
		transform: scale(0.91);
	}
`;

const First = styled.div``;
const Second = styled.div`
	height: 500px;
`;

const Content = styled.div`
	position: absolute;
	display: flex;
	margin-top: 40px;

	h5 {
		color: orange;
	}

	p {
		width: 500px;
	}

	h1 {
		font-size: 50px;
		width: 500px;
	}
`;

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;

	svg {
		position: relative;
		display: block;
		width: calc(300% + 1.3px);
		height: 600px;
		transform: rotateY(180deg);
	}

	path {
		fill: #222163;
	}
`;

const Container = styled.div`
	height: 600px;
	width: 100%;
	/* background-color: black; */
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	/* align-items: center; */
	color: white;
`;
