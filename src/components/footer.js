// Package
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
	background: ${({ theme }) => theme.colors.black};
`;

const InnerContainer = styled.div`
	position: relative;
	padding: 30px 20px;
	color: ${({ theme }) => theme.colors.white};
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
`;

const SocialIcons = styled.div`
	z-index: 2;
	position: absolute;
	top: 40px;
	right: 0;
	padding: 0 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	a {
		display: block;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		& :nth-child(2) {
			margin: 0 15px 0 15px;
		}
	}
	img {
		opacity: 0.2;
		width: 35px;
		height: 35px;
		transition: all 0.3s;
		&:hover {
			opacity: 1;
		}
	}
`;

export default class footer extends React.Component {
	render() {
		return (
			<>
				<MainContainer>
					<InnerContainer>
						<p>This is the footer</p>
						<SocialIcons>
							<a href="https://twitter.com/adrienrahier" target="_blank">
								<img src={`twitter.svg`} alt="Twitter icon" />
							</a>
							<a href="https://github.com/aegiz" target="_blank">
								<img src={`github.svg`} alt="Github icon" />
							</a>
							<a href="http://linkedin.com/in/adrienrahier" target="_blank">
								<img src={`linkedin.svg`} alt="linkedin icon" />
							</a>
						</SocialIcons>
					</InnerContainer>
				</MainContainer>
			</>
		);
	}
}
