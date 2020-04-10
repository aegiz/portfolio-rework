// Package
import React, { Component } from "react";

// Utils
import CustImg from "@utils/StaticImg";
import Frame2 from "@static/Frame2.png";

// Styles
import styled from "styled-components";

const MainContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 3500px;
	max-width: 1400px;
	margin: 0 auto;
	p {
		z-index: 1;
		color: ${({ theme }) => theme.colors.black};
		${({ theme }) => theme.mediaQueries.m} {
			color: ${({ theme }) => theme.colors.yellow.main};
		}
	}
`;

const Background = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-image: url("${Frame2}");
	background-repeat: no-repeat;
`;

export default class FirstHeader extends Component {
	state = {};

	componentDidMount() {}
	render() {
		return (
			<MainContainer>
				<Background></Background>
				<p>This the header 1</p>
			</MainContainer>
		);
	}
}
