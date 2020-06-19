// Package
import React, { Component } from "react";
import styled from "styled-components";

// Assets
import clouds from "@static/clouds.jpg";

// Styled Components
const LogoContainer = styled.div`
	position: absolute;
	z-index: 10;
	left: 50%;
	transform: translateX(-50%);
	top: 130px;
	overflow: hidden;
	border-radius: 50%;
	user-select: none;
	--size-logo: 256px;
	${({ theme }) => theme.mediaQueries.m} {
		top: 100px;
		--size-logo: 220px;
	}
`;

const Slices = styled.div`
	opacity: 0.2;
	width: var(--size-logo);
	height: var(--size-logo);
	border-radius: 50%;
	background: url("${clouds}") ${({ theme }) => theme.colors.grey.dark};
	background-size: var(--size-logo) var(--size-logo);
	overflow: hidden;
    transition: all 1s;
`;

const SliceItem = styled.div`
	width: var(--size-logo);
	overflow: hidden;
	height: calc(var(--size-logo) / 16);
	background-image: url("${clouds}");
	background-repeat: no-repeat;
	background-position: center -${props => props.index}rem;
	background-size: var(--size-logo) var(--size-logo);
	transition: all 1s ease-in-out;
	animation: sliceAnim 2s ease-in-out ${props => props.index * -0.5}s
		alternate infinite;
	@keyframes sliceAnim {
		from {
			transform: translateX(16px);
		}
		to {
			transform: translateX(-16px);
		}
	}
`;

const ARLogo = styled.div`
	position: absolute;
	top: calc(50% + 19px);
	left: 50%;
	transform: translate(-50%, -50%);
	img {
		width: 139px;
		height: 141px;
	}
	${({ theme }) => theme.mediaQueries.m} {
		top: calc(50% + 11px);
		left: calc(50% - 1px);
		img {
			width: 129px;
			height: 99px;
		}
	}
`;

export default class LogoComp extends Component {
	render() {
		return (
			<LogoContainer>
				<Slices>
					{[...Array(16)].map((e, i) => (
						<SliceItem index={i} key={i} />
					))}
				</Slices>
				<ARLogo>
					<img src={`logo.svg`} alt="AR Logo" />
				</ARLogo>
			</LogoContainer>
		);
	}
}
