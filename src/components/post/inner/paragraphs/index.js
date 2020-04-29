// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

const Paragraph = styled.div`
	position: relative;
`;

export default class ParagraphComp extends Component {
	static propTypes = {
		data: PropTypes.shape({
			title: PropTypes.string.isRequired,
			width: PropTypes.number.isRequired,
			height: PropTypes.number.isRequired,
			src: PropTypes.string.isRequired,
		}).isRequired,
	};
	render() {
		return (
			<Paragraph>
				<div>
					<p></p>
				</div>
			</Paragraph>
		);
	}
}
