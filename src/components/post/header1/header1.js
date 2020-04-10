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
	flex-direction: ${props => (props.invertedDisplay ? "row-reverse" : "row")};
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	height: 3500px;
	max-width: 1400px;
	margin: 0 auto;
`;

const Background = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-image: url("${Frame2}");
	background-repeat: no-repeat;
	background-size: 123%;
	background-position: 51% -82px;
`;

const CustImgContainerTitle = styled.div`
	width: 100%;
	height: 100%;
	opacity: 0.5;
`;

const TitleContainer = styled.div`
	opacity: 0;
	position: relative;
	z-index: 1;
	width: 50%;
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	h1 {
		color: ${({ theme }) => theme.colors.black};
		font-size: ${({ theme }) => theme.fontSizes.xl};
		${({ theme }) => theme.mediaQueries.m} {
			color: ${({ theme }) => theme.colors.yellow.main};
		}
	}
	p {
		margin: 0;
	}
`;

const SubTitleContainer = styled.div`
	position: relative;
	z-index: 1;
	width: 50%;
	padding: 207px 0 66px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.yellow.main};
	h2 {
		text-transform: uppercase;
		display: block;
		width: 100%;
		text-align: center;
		color: ${({ theme }) => theme.colors.black};
		font-size: ${({ theme }) => theme.fontSizes["2xl"]};
		font-weight: ${({ theme }) => theme.fontWeights.black};
		letter-spacing: -0.06em;
		${({ theme }) => theme.mediaQueries.m} {
			color: ${({ theme }) => theme.colors.yellow.main};
		}
	}
`;

const CustImgContainerSubtitle = styled.div`
	width: 100%;
	height: 100%;
	max-width: 470px;
	margin: 60px 0 0 60px;
`;

export default class FirstHeader extends Component {
	state = {};

	componentDidMount() {}

	render() {
		return (
			<MainContainer invertedDisplay={this.props.invertedDisplay}>
				<Background />
				<SubTitleContainer>
					<h2>{this.props.subtitle}</h2>
					<CustImgContainerSubtitle>
						<CustImg
							src={this.props.imageSubtitle.src}
							alt={this.props.imageSubtitle.alt}
						/>
					</CustImgContainerSubtitle>
				</SubTitleContainer>
				<TitleContainer>
					<h1>{this.props.title}</h1>
					<p>{this.props.intro}</p>
					<CustImgContainerTitle>
						<span>{this.props.captionImageTitle}</span>
						<CustImg
							src={this.props.imageTitle.src}
							alt={this.props.imageTitle.alt}
						/>
					</CustImgContainerTitle>
				</TitleContainer>
			</MainContainer>
		);
	}
}
