// Package
import React, { Component } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
	position: relative;
	padding: 20px 16px;
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
	border-top: 1px solid #ffffff0a;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const Copyright = styled.div`
	color: ${({ theme }) => theme.colors.white};
`;

const OtherInfo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	a {
		color: ${({ theme }) => theme.colors.white};
	}
	span {
		margin: 0 10px;
		color: ${({ theme }) => theme.colors.white};
		font-size: ${({ theme }) => theme.fontSizes["l"]};
	}
`;

export default class FooterComp extends Component {
	render() {
		return (
			<FooterContainer>
				<Copyright>
					© 20012 - {new Date().getFullYear()} · Adrien Rahier{" "}
				</Copyright>
				<OtherInfo>
					<a href="mailto:adrien.rahier@gmail.com">Email</a>
					<span>·</span>
					<a
						href="http://linkedin.com/in/adrienrahier"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
					<span>·</span>
					<a
						href="https://github.com/aegiz"
						target="_blank"
						rel="noopener noreferrer"
					>
						Github
					</a>
					<span>·</span>
					<a
						href="https://twitter.com/adrienrahier"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</a>
					<span>·</span>
					<a
						href="https://medium.com/@adrienrahier"
						target="_blank"
						rel="noopener noreferrer"
					>
						Medium
					</a>
				</OtherInfo>
			</FooterContainer>
		);
	}
}
