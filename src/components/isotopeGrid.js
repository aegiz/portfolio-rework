import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { withTheme } from "styled-components";

// const Container = styled.div`
// 	background: transparent;
// 	border-radius: 3px;
// 	border: 2px solid palevioletred;
// 	color: palevioletred;
// 	margin: 0 1em;
// 	padding: 0.25em 1em;
// `;

class IsotopeGrid extends Component {
	componentDidMount() {
		this.props.createIsotopeGrid(ReactDOM.findDOMNode(this));
	}

	render() {
		return (
			<div id="filter-container">
				{this.props.posts.map((post, i) => (
					<div key={i} className="filter-item filter-one">
						Item 1
                        {console.log(post)}
					</div>
				))}
			</div>
		);
	}
}

export default withTheme(IsotopeGrid);
