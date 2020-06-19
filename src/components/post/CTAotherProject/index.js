// Package
import AniLink from "gatsby-plugin-transition-link/AniLink";
import PropTypes from "prop-types";
import React, { Component } from "react";

// Styles
import styled from "styled-components";

// Utils
import withWindowDimensions from "@utils/withWindowDimensions";

// Assets
import leftIcon from "@static/left.svg";
import rightIcon from "@static/right.svg";

const OtherProjects = styled.div`
	display: ${props => (props.mobileDisplay ? `none` : `flex`)};
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	margin: 20px auto;
	${({ theme }) => theme.mediaQueries.m} {
		display: ${props => (props.mobileDisplay ? `flex` : `none`)};
		justify-content: flex-end;
		max-width: inherit;
		margin: auto 0;
	}
`;

const Projects = styled.div`
	position: relative;
	width: 40px;
	height: 30px;
	transition: all 0.3s;
	a {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: block;
		opacity: 0.5;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
		transition: all 0.3s;
	}
	img {
		width: 100%;
		height: 100%;
	}
	&:hover {
		a {
			opacity: 1;
		}
	}
	${({ theme }) => theme.mediaQueries.m} {
		&:nth-child(1) {
			padding: 0 0 0 20px;
		}
		&:before {
			content: none;
		}
	}
	${({ theme }) => theme.mediaQueries.xs} {
		padding: 0 0 0 20px;
	}
`;

const Text = styled.p`
	opacity: ${props => (props.separator ? `0.2` : `0.6`)};
	font-size: ${({ theme }) => theme.fontSizes["m"]};
	color: ${({ theme }) => theme.colors.black};
	${({ theme }) => theme.mediaQueries.xs} {
		display: ${props => (props.separator ? `block` : `none`)};
	}
`;

class CTAotherProjectComp extends Component {
	static propTypes = {
		mobileDisplay: PropTypes.bool,
		previous: PropTypes.shape({
			slug: PropTypes.string.isRequired,
			text: PropTypes.shape.isRequired,
		}),
		next: PropTypes.shape({
			slug: PropTypes.string.isRequired,
			text: PropTypes.shape.isRequired,
		}),
	};
	render() {
		return (
			<OtherProjects mobileDisplay={this.props.mobileDisplay}>
				{!(this.props.next && this.props.previous) && (
					<Text>Discover More Projects:</Text>
				)}
				{this.props.previous && (
					<Projects previous>
						{!this.props.isM ? (
							<AniLink
								swipe
								direction="right"
								duration={0.8}
								to={this.props.previous.slug}
								rel="previous"
								top="exit"
								entryOffset={100}
							>
								<img src={leftIcon} alt={`Left icon`} />
							</AniLink>
						) : (
							<AniLink fade to={this.props.previous.slug} duration={0.2}>
								<img src={leftIcon} alt={`Left icon`} />
							</AniLink>
						)}
					</Projects>
				)}
				{this.props.next && this.props.previous && <Text separator> | </Text>}
				{this.props.next && (
					<Projects>
						{!this.props.isM ? (
							<AniLink
								swipe
								direction="left"
								duration={0.8}
								to={this.props.next.slug}
								rel="next"
								top="exit"
								entryOffset={100}
							>
								<img src={rightIcon} alt={`Left icon`} />
							</AniLink>
						) : (
							<AniLink fade to={this.props.next.slug} duration={0.2}>
								<img src={rightIcon} alt={`Left icon`} />
							</AniLink>
						)}
					</Projects>
				)}
			</OtherProjects>
		);
	}
}

export default withWindowDimensions(CTAotherProjectComp);
