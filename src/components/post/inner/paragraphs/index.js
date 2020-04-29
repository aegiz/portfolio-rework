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
		return `&:nth-child(2) { margin: 15px 30px; }`;
	}
};

// Styled Components
const ParagraphContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
`;

const Paragraph = styled.div`
	margin: 15px 0;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["normal"]};
	${props => handleMarginParagraph(props.nbParagraph)}
	a {
		color: ${({ theme }) => theme.colors.white};
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
