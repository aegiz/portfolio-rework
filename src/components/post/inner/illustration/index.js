// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

const Illustration = styled.div`
	position: relative;
`;

export default class IllustrationComp extends Component {
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
			<Illustration>
				<div>
					<p></p>
				</div>
			</Illustration>
		);
	}
}
