import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Isotope from "isotope-layout/js/isotope";
import styled, { withTheme } from "styled-components";

const Container = styled.div`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
`;

class Gallery extends Component {
	onFilterChange = newFilter => {
		if (typeof this.iso === "undefined") {
			this.iso = new Isotope("#filter-container", {
				itemSelector: ".filter-item",
				layoutMode: "fitRows",
			});
		}
		if (newFilter === "*") {
			this.iso.arrange({ filter: `*` });
		} else {
			this.iso.arrange({ filter: `.${newFilter}` });
		}
	};

	render() {
		return (
			<Container>
				<div>
					<button
						data-filter="*"
						onClick={() => {
							this.onFilterChange("*");
						}}
					>
						All
					</button>

					<button
						data-filter="filter-one"
						onClick={() => {
							this.onFilterChange("filter-one");
						}}
					>
						One
					</button>

					<button
						data-filter="filter-two"
						onClick={() => {
							this.onFilterChange("filter-two");
						}}
					>
						Two
					</button>
				</div>
				<div id="filter-container">
					<div className="filter-item filter-one">Item 1</div>
					<div className="filter-item filter-one">Item 1</div>
					<div className="filter-item filter-one">Item 1</div>
					<div className="filter-item filter-one">Item 1</div>
					<div className="filter-item filter-two">Item 2</div>
					<div className="filter-item filter-two">Item 2</div>
					<div className="filter-item filter-two">Item 2</div>
					<div className="filter-item filter-two">Item 2</div>
					<div className="filter-item filter-one">Item 1</div>
					<div className="filter-item filter-one">Item 1</div>
					<div className="filter-item filter-one">Item 1</div>
					<div className="filter-item filter-one">Item 1</div>
					<div className="filter-item filter-one">Item 1</div>
					<div className="filter-item filter-two">Item 2</div>
					<div className="filter-item filter-one">Item 1</div>
					<div className="filter-item filter-one">Item 1</div>
					<div className="filter-item filter-one">Item 1</div>
					<div className="filter-item filter-one">Item 1</div>
					<div className="filter-item filter-two">Item 2</div>
					<div className="filter-item filter-two">Item 2</div>
					<div className="filter-item filter-two">Item 2</div>
					<div className="filter-item filter-two">Item 2</div>
					<div className="filter-item filter-two">Item 2</div>
					<div className="filter-item filter-two">Item 2</div>
				</div>
			</Container>
		);
	}
}

export default withTheme(Gallery);
