// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Utils
import CustImg from "@utils/StaticImg";

const IllustrationContainer = styled.div`
	position: relative;
`;

const Caption = styled.div`
	margin: 17px 0 20px;
	text-align: center;
	font-style: italic;
	font-size: ${({ theme }) => theme.fontSizes["l"]};
	${({ theme }) => theme.mediaQueries.m} {
		font-size: ${({ theme }) => theme.fontSizes["normal"]};
	}
`;

export default class IllustrationComp extends Component {
	static propTypes = {
		data: PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
		}).isRequired,
	};
	render() {
		return (
			<IllustrationContainer>
				<CustImg
					src={`${this.props.data.src}`}
					alt={`${this.props.data.alt}`}
				/>
				<Caption>{this.props.data.alt}</Caption>
			</IllustrationContainer>
		);
	}
}
