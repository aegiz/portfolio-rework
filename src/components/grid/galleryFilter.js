import React, { Component } from "react";
// import styled from "styled-components";

// const Container = styled.div`
// 	background: transparent;
// 	border-radius: 3px;
// 	border: 2px solid palevioletred;
// 	color: palevioletred;
// 	margin: 0 1em;
// 	padding: 0.25em 1em;
// `;

class GalleryFilter extends Component {
	render() {
		return (
			<button
				onClick={() => {
					this.props.updateIsotopeGrid(this.props.filter);
				}}
			>
				{this.props.text}
			</button>
		);
	}
}

export default GalleryFilter;
