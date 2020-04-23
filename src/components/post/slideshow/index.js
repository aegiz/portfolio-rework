// Package
import PropTypes from "prop-types";
import React, { Component } from "react";

// Styles
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
`;

export default class SlideShow extends Component {
	static propTypes = { title: PropTypes.string };
	render() {
		return <Container>{this.props.title}</Container>;
	}
}
