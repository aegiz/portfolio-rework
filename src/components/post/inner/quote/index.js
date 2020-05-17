// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Utils
import MdToHtml from "@utils/MdToHtml";

const BlockquoteContainer = styled.div`
	position: relative;
`;

const Blockquote = styled.blockquote`
	border: none;
	text-align: center;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["xl"]};
	margin: 20px 0;
	font-style: italic;
	&:before,
	&:after {
		content: "";
		display: block;
		width: 10%;
		height: 1px;
		background: ${({ theme }) => theme.colors.white};
		margin: 20px auto;
	}
	a {
		color: ${({ theme }) => theme.colors.white};
	}
`;

const BlockquoteAuthor = styled.div`
	font-size: ${({ theme }) => theme.fontSizes["normal"]};
	margin: 10px 0 0 0;
	text-align: center;
	a {
		margin: 0;
		color: ${({ theme }) => theme.colors.white};
	}
`;

export default class BlockquoteComp extends Component {
	static propTypes = {
		data: PropTypes.shape({
			content: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
		}).isRequired,
	};
	render() {
		return (
			<BlockquoteContainer>
				<Blockquote>
					<MdToHtml content={this.props.data.content} />
					<BlockquoteAuthor>
						<MdToHtml content={this.props.data.author} />
					</BlockquoteAuthor>
				</Blockquote>
			</BlockquoteContainer>
		);
	}
}
