// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Utils
import MdToHtml from "@utils/MdToHtml";

/* Styles */

// Helpers
const handleMarginParagraph = nbParagraph => {
	if (nbParagraph === 2) {
		return `&:nth-child(1) { margin-right: 15px; } &:nth-child(2) { margin-left: 15px; }`;
	} else if (nbParagraph === 3) {
		return `&:nth-child(2) { margin: 0 30px; }`;
	}
};

// Styled Components
const ParagraphContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	${({ theme }) => theme.mediaQueries.m} {
		flex-direction: column;
	}
`;

const Paragraph = styled.div`
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["normal"]};
	margin: 0;
	${props => handleMarginParagraph(props.nbParagraph)}
	a {
		color: ${({ theme }) => theme.colors.white};
	}
	hr {
		border: none;
		margin: 10px 0;
	}
	h3 {
		font-size: ${({ theme }) => theme.fontSizes["l"]};
		font-weight: ${({ theme }) => theme.fontWeights.semibold};
	}
	${({ theme }) => theme.mediaQueries.m} {
		margin-left: 0 !important;
		margin-right: 0 !important;
	}
	${({ theme }) => theme.mediaQueries.s} {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
`;

export default class ParagraphComp extends Component {
	static propTypes = {
		data: PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string.isRequired,
			}).isRequired
		).isRequired,
	};

	render() {
		return (
			<ParagraphContainer>
				{this.props.data.map((paragraph, i) => (
					<Paragraph nbParagraph={this.props.data.length} key={i}>
						<MdToHtml content={paragraph.text} />
					</Paragraph>
				))}
			</ParagraphContainer>
		);
	}
}
