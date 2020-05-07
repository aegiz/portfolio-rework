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
			({ theme }) => theme.colors.grey.main
		)};
	${({ theme }) => theme.mediaQueries.m} {
		display: ${props => (props.mobileDisplay ? "flex" : "none")};
		width: 100%;
		height: 100%;
		margin: 15px 0 0 0;
	}
`;

const OtherInfoInner = styled.div`
	width: ${props => (props.typeOfArticle === "multistep" ? "33%" : "100%")};
	flex-direction: ${props =>
		props.typeOfArticle === "multistep" ? "column" : "row"};
	text-align: right;
	padding: 20px;
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
	}
`;

const TypeOfProject = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.normal};
`; // Maybe here use inheritance instead of reapeating myself

const Role = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.normal};
`;

const Date = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.normal};
`;

export default class OtherInfoComp extends Component {
	static propTypes = {
		mobileDisplay: PropTypes.bool,
		date: PropTypes.string.isRequired,
		duration: PropTypes.string.isRequired,
		typeOfProject: PropTypes.string.isRequired,
		typeOfArticle: PropTypes.string,
	};
	render() {
		return (
			<OtherInfo
				mobileDisplay={this.props.mobileDisplay}
				typeOfProject={this.props.typeOfProject}
			>
				<OtherInfoInner typeOfArticle={this.props.typeOfArticle}>
					<TypeOfProject>
						Project Type: <b>TBC</b>
					</TypeOfProject>
					<Role>
						Role: <b>Solutions Engineer</b>
					</Role>
					<Date>
						{this.props.date} ({this.props.duration})
					</Date>
				</OtherInfoInner>
			</OtherInfo>
		);
	}
}
