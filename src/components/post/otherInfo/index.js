// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Utils
import { handleColorType } from "@utils/projectHelpers";

// Styled Components
const OtherInfo = styled.div`
	width: 100%;
	height: 23.95%;
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
		display: ${props => (props.mobileDisplay ? "flex" : "none")};
		width: 100%;
		height: 100%;
		margin: 15px 0 0 0;
	}
`;

const OtherInfoInner = styled.ul`
	width: ${props =>
		props.typeOfArticle === "multistep" ? `calc(42.36% + 40px)` : `100%`};
	display: flex;
	flex-direction: ${props =>
		props.typeOfArticle === "multistep" ? "column" : "row"};

	align-items: flex-start;
	justify-content: space-around;
	height: 100%;
	padding: 25px 35px 5px 35px;
	margin: 0;
	list-style: none;
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
	}
`;

const Info = styled.li`
	margin: 0;
	font-size: ${({ theme }) => theme.fontSizes.normal};
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
`;

const InfoDate = styled(Info)``;

const InfoTool = styled(Info)``;

const InfoType = styled.div`
	width: 135px;
	font-size: ${({ theme }) => theme.fontSizes["l"]};
	font-weight: ${({ theme }) => theme.fontWeights["semibold"]};
`;

const InfoContent = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
`;

const Techno = styled.span`
	margin: 0 10px 10px 0;
	padding: 10px;
	background: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
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
			>
				<OtherInfoInner typeOfArticle={this.props.typeOfArticle}>
					<Info>
						<InfoType>Category:</InfoType>
						<InfoContent>{this.props.typeOfProject}</InfoContent>
					</Info>
					<InfoDate>
						<InfoType>Date:</InfoType>
						<InfoContent>
							{this._displayDate(
								this.props.date.split("-")[2],
								this.props.end.split("-")[2],
								this.props.duration
							)}
						</InfoContent>
					</InfoDate>
					<InfoTool>
						<InfoType>Tools used:</InfoType>
						<InfoContent>
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
