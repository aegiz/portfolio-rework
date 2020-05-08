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
	${({ theme }) => theme.mediaQueries.s} {
		border: none;
		flex-direction: column;
		padding: 16px;
	}
`;

const Copyright = styled.div`
	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.mediaQueries.s} {
		font-size: ${({ theme }) => theme.fontSizes["m"]};
	}
`;

const OtherInfoList = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	list-style: none;
	margin: 0;
	padding: 0;
	${({ theme }) => theme.mediaQueries.s} {
		margin-top: 8px;
	}
`;

const OtherInfoItem = styled.li`
	position: relative;
	margin: 0 12px;
	a {
		color: ${({ theme }) => theme.colors.white};
	}
	&:after {
		content: "·";
		color: ${({ theme }) => theme.colors.white};
		position: absolute;
		top: 1px;
		right: -14px;
	}
	&:last-child {
		&:after {
			content: none;
		}
	}
`;

export default class FooterComp extends Component {
	render() {
		return (
			<FooterContainer>
				<Copyright>
					© 20012 - {new Date().getFullYear()} · Adrien Rahier{" "}
				</Copyright>
				<OtherInfoList>
					<OtherInfoItem>
						<a href="mailto:adrien.rahier@gmail.com">Email</a>
					</OtherInfoItem>
					<OtherInfoItem>
						<a
							href="http://linkedin.com/in/adrienrahier"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
					</OtherInfoItem>
					<OtherInfoItem>
						<a
							href="https://github.com/aegiz"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github
						</a>
					</OtherInfoItem>
					<OtherInfoItem>
						<a
							href="https://twitter.com/adrienrahier"
							target="_blank"
							rel="noopener noreferrer"
						>
							Twitter
						</a>
					</OtherInfoItem>
					<OtherInfoItem>
						<a
							href="https://medium.com/@adrienrahier"
							target="_blank"
							rel="noopener noreferrer"
						>
							Medium
						</a>
					</OtherInfoItem>
				</OtherInfoList>
			</FooterContainer>
		);
	}
}
