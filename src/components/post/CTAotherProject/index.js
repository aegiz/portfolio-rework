// Package
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { Component } from "react";

// Styles
import styled from "styled-components";

const OtherProjects = styled.div`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 350px;
	margin: 0 auto 20px;
	display: ${props => (props.desktop ? "flex" : "none")};
	${({ theme }) => theme.mediaQueries.m} {
		display: ${props => (props.desktop ? "none" : "flex")};
		justify-content: flex-end;
		margin: auto;
	}
`;

const Projects = styled.div`
	position: relative;
	padding: 0 20px;
	&:before {
		content: "";
		position: absolute;
		top: calc(50% - 3px);
		left: 4px;
		border-style: solid;
		border-width: 0 6px 7px 6px;
		border-color: transparent transparent #000000 transparent;
		transform: ${props => (props.previous ? "" : "rotate(180deg)")};
	}
	${({ theme }) => theme.mediaQueries.m} {
		&:nth-child(2) {
			padding: 0 0 0 20px;
		}
	}
	a {
		display: block;
		opacity: 0.5;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
		font-size: ${({ theme }) => theme.fontSizes["m"]};
		transition: all 0.3s;
		&:hover {
			opacity: 1;
		}
	}
`;

export default class CTAotherProject extends Component {
	render() {
		return (
			<OtherProjects desktop={this.props.desktop}>
				{this.props.previous && (
					<Projects previous>
						<AniLink
							cover
							bg="#000000"
							direction="down"
							duration={0.8}
							to={this.props.previous.fields.slug}
							rel="previous"
						>
							{this.props.previousText}
						</AniLink>
					</Projects>
				)}
				{this.props.next && (
					<Projects>
						<AniLink
							cover
							bg="#000000"
							direction="up"
							duration={0.8}
							to={this.props.next.fields.slug}
							rel="next"
						>
							{this.props.nextText}
						</AniLink>
					</Projects>
				)}
			</OtherProjects>
		);
	}
}
