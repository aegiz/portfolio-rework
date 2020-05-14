// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "@components/layout";

// Utils
import { handleColorType } from "@utils/projectHelpers";

// Styled Components
const OtherInfo = styled.div`
	width: 100%;
	height: ${props => (props.typeOfArticle === "multistep" ? "23.95%" : "100%")};
	display: ${props => (props.mobileDisplay ? "none" : "flex")};
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	background: ${props =>
		handleColorType(
			props.typeOfProject,
			({ theme }) => theme.colors.grey.light
		)};
	${({ theme }) => theme.mediaQueries.m} {
		background: none;
		display: ${props => (props.mobileDisplay ? "flex" : "none")};
		width: 100%;
		height: 100%;
		margin: 15px 0 0 0;
	}
`;

const OtherInfoInner = styled.ul`
	height: 100%;
	margin: 0;
	list-style: none;
	display: flex;
	align-items: flex-start;
	justify-content: space-around;
	flex-direction: ${props =>
		props.typeOfArticle === "multistep" ? "column" : "row"};
	width: ${props =>
		props.typeOfArticle === "multistep" ? `calc(42.36% + 40px)` : `100%`};
	padding: ${props =>
		props.typeOfArticle === "multistep" ? `25px 35px 0` : `45px 35px 0`};
	${({ theme }) => theme.mediaQueries.xl} {
		padding: ${props =>
			props.typeOfArticle === "multistep" ? `20px 20px 0` : `45px 35px 0`};
	}
	${({ theme }) => theme.mediaQueries.l} {
		padding: ${props =>
			props.typeOfArticle === "multistep" ? `20px 20px 0` : `30px 30px 0`};
	}
	${({ theme }) => theme.mediaQueries.m} {
		flex-wrap: wrap;
		justify-content: flex-start;
		padding: 0;
	}
	${({ theme }) => theme.mediaQueries.xs} {
		flex-direction: column;
	}
`;

const Info = styled.li`
	margin: 0;
	font-size: ${({ theme }) => theme.fontSizes.normal};
	display: flex;
	flex-direction: ${props =>
		props.typeOfArticle === "multistep" ? "row" : "column"};
	align-items: flex-start;
	justify-content: flex-start;
	${({ theme }) => theme.mediaQueries.m} {
		flex-direction: row;
		align-items: center;
		width: 50%;
	}
	${({ theme }) => theme.mediaQueries.xs} {
		width: 100%;
	}
`;

const InfoDate = styled(Info)`
	margin: ${props => (props.typeOfArticle === "multistep" ? "0" : "0 15px")};
	${({ theme }) => theme.mediaQueries.m} {
		margin: 0;
	}
`;

const InfoTool = styled(Info)`
	max-width: ${props =>
		props.typeOfArticle === "multistep" ? "inherit" : "300px"};
	${({ theme }) => theme.mediaQueries.xl} {
		flex-direction: column;
	}
	${({ theme }) => theme.mediaQueries.m} {
		width: 100%;
		align-items: flex-start;
		justify-content: flex-start;
	}
`;

const InfoType = styled.div`
	width: ${props => (props.typeOfArticle === "multistep" ? "135px" : "auto")};
	font-weight: ${({ theme }) => theme.fontWeights["semibold"]};
	width: 105px;
	font-size: ${props => {
		return theme.fontSizes[
			props.typeOfArticle === "multistep" ? "l" : "normal"
		];
	}};
	${({ theme }) => theme.mediaQueries.m} {
		width: auto;
		margin-right: 10px;
	}
`;

const InfoContent = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	margin-top: ${props => (props.typeOfArticle === "multistep" ? "0" : "15px")};
	font-size: ${props => {
		return theme.fontSizes[
			props.typeOfArticle === "multistep" ? "normal" : "xl"
		];
	}};
	${({ theme }) => theme.mediaQueries.xl} {
		font-size: ${({ theme }) => theme.fontSizes["normal"]};
	}
	${({ theme }) => theme.mediaQueries.m} {
		margin: 0;
	}
`;

const Techno = styled.span`
	margin: 0 10px 10px 0;
	padding: 10px;
	background: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes.normal};
	${({ theme }) => theme.mediaQueries.xl} {
		margin: 8px 8px 0 0;
	}
`;

export default class OtherInfoComp extends Component {
	static propTypes = {
		mobileDisplay: PropTypes.bool,
		date: PropTypes.string.isRequired,
		end: PropTypes.string.isRequired,
		techno: PropTypes.string.isRequired,
		duration: PropTypes.string.isRequired,
		typeOfProject: PropTypes.string.isRequired,
		typeOfArticle: PropTypes.string,
	};
	_displayDate = (start, end, duration) => {
		let date = "";
		if (start === end) {
			if (duration !== "") {
				date = `${start} (${duration})`;
			} else {
				date = start;
			}
		} else {
			if (duration !== "") {
				date = `${start}-${end} (${duration})`;
			} else {
				date = `${start}-${end}`;
			}
		}
		return date;
	};
	render() {
		return (
			<OtherInfo
				mobileDisplay={this.props.mobileDisplay}
				typeOfProject={this.props.typeOfProject}
				typeOfArticle={this.props.typeOfArticle}
			>
				<OtherInfoInner typeOfArticle={this.props.typeOfArticle}>
					<Info typeOfArticle={this.props.typeOfArticle}>
						<InfoType>Category:</InfoType>
						<InfoContent typeOfArticle={this.props.typeOfArticle}>
							{this.props.typeOfProject}
						</InfoContent>
					</Info>
					<InfoDate typeOfArticle={this.props.typeOfArticle}>
						<InfoType>Date:</InfoType>
						<InfoContent typeOfArticle={this.props.typeOfArticle}>
							{this._displayDate(
								this.props.date.split("-")[2],
								this.props.end.split("-")[2],
								this.props.duration
							)}
						</InfoContent>
					</InfoDate>
					<InfoTool typeOfArticle={this.props.typeOfArticle}>
						<InfoType>Tools used:</InfoType>
						<InfoContent typeOfArticle={this.props.typeOfArticle}>
							{this.props.techno.split(",").map((techno, i) => (
								<Techno key={i}>{techno.trim()}</Techno>
							))}
						</InfoContent>
					</InfoTool>
				</OtherInfoInner>
			</OtherInfo>
		);
	}
}
