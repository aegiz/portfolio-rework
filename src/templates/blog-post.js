// Packages
import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

// Components
import Cover from "@components/post/Cover";
import CTAhome from "@components/post/CTAhome";
import CTAotherProject from "@components/post/CTAotherProject";
import Layout from "@components/layout";
import OtherInfo from "@components/post/otherInfo";
import SEO from "@components/seo";

// Utils
import MdToHtml from "@utils/MdToHtml";
import withWindowDimensions from "@utils/withWindowDimensions";

// Assets
import Middle from "@static/start.png";
import PlusIcon from "@static/plus.svg";
import MinusIcon from "@static/minus.svg";

const Background = styled.div`
	position: absolute;
	/* z-index:  10; */
	/* opacity: 0.5; */
	width: 100%;
	height: 100%;
	background-image: url("${Middle}");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-position: 0 0;
`;

const BlogPostContainer = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	margin: 0 auto;
	${({ theme }) => theme.mediaQueries.m} {
		flex-direction: column;
		height: auto;
	}
`;

const LeftPanel = styled.div`
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	margin: 0;
	background: ${({ theme }) => theme.colors.white};
	width: 45%;
	height: 100%;
	${({ theme }) => theme.mediaQueries.m} {
		z-index: 2;
		width: 100%;
	}
`;

const LeftPanelTop = styled.div`
	display: block;
	width: 100%;
	${({ theme }) => theme.mediaQueries.m} {
		position: fixed;
		z-index: 2;
		height: 60px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		background: ${({ theme }) => theme.colors.white};
		padding: 0 70px;
	}
`;

const LeftPanelIntro = styled.div`
	margin-top: 60px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	.upper {
		justify-content: normal;
		width: 100%;
		padding: 0 90px;
		${({ theme }) => theme.mediaQueries.l} {
			margin-top: 15px;
			padding: 0 70px;
		}
	}
`;

const Title = styled.h1`
	mix-blend-mode: exclusion;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["6xl"]};
	${({ theme }) => theme.mediaQueries.l} {
		font-size: ${({ theme }) => theme.fontSizes["5xl"]};
	}
	&:after {
		content: "";
		background: ${({ theme }) => theme.colors.white};
		display: block;
		width: 30px;
		height: 3px;
		margin-top: 20px;
	}
`;

const Description = styled.div`
	margin-top: 50px;
	overflow: auto;
	height: ${props => props.windowHeight - 435}px;
	p {
		margin: 0;
		font-size: ${({ theme }) => theme.fontSizes["xl"]};
		${({ theme }) => theme.mediaQueries.l} {
			font-size: ${({ theme }) => theme.fontSizes["normal"]};
		}
	}
`;

const MiddlePanel = styled.div`
	z-index: 1;
	position: absolute;
	left: calc(45% - 40px);
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	background: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	width: 31.7%;
	height: ${props => (props.middlePanelOpen ? "100%" : "400px")};
	transition: all 0.3s;
	${({ theme }) => theme.mediaQueries.l} {
		padding: 25px 50px 0;
	}
	${({ theme }) => theme.mediaQueries.m} {
		padding: 25px 70px 0;
		position: relative;
		width: 100%;
		left: auto;
		bottom: auto;
	}
`;

const MiddlePanelCTAContainer = styled.div`
	position: relative;
	width: 100%;
	height: 80px;
	padding: 0 119px;
`;

const MiddlePanelCTA = styled.button`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	border: 0;
	margin: 0;
	padding: inherit;
	cursor: pointer;
	outline: none;
	background: transparent;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["normal"]};
	font-weight: ${({ theme }) => theme.fontWeights["semibold"]};
	transition: all 0.3s;
	opacity: ${props => {
		if (props.more && props.middlePanelOpen) {
			return "0";
		} else if (props.more && !props.middlePanelOpen) {
			return "1";
		} else if (!props.more && props.middlePanelOpen) {
			return "1";
		} else if (!props.more && !props.middlePanelOpen) {
			return "0";
		}
	}};
	img {
		display: inline-block;
		width: 14px;
		height: 14px;
		margin-bottom: 3px;
		vertical-align: bottom;
	}
	span {
		height: 18px;
		margin-left: 5px;
		display: inline-block;
		vertical-align: bottom;
	}
`;

const RightPanel = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	height: 100%;
	width: 55%;
	margin: 0;
	${({ theme }) => theme.mediaQueries.m} {
		display: none;
	}
`;

class BlogPostTemplate extends React.Component {
	state = {
		middlePanelOpen: false,
	};
	render() {
		const post = this.props.data.mdx;
		const siteTitle = this.props.data.site.siteMetadata.title;
		const { previous, next } = this.props.pageContext;
		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO
					title={post.frontmatter.title}
					description={post.frontmatter.description || post.excerpt}
					path={post.frontmatter.path}
				/>
				<Background />
				<BlogPostContainer>
					<LeftPanel>
						<LeftPanelTop>
							<CTAhome text={"Homepage"} />
							{this.props.isM && (
								<CTAotherProject
									previous={
										previous
											? { slug: previous.fields.slug, text: "Previous Project" }
											: undefined
									}
									next={
										next
											? { slug: next.fields.slug, text: "Next Project" }
											: undefined
									}
								/>
							)}
						</LeftPanelTop>
						<LeftPanelIntro>
							{this.props.isM && (
								<Cover
									src={post.frontmatter.featuredImage.childImageSharp.fluid}
								/>
							)}
							<div className="upper">
								<Title>{post.frontmatter.title}</Title>
								<Description windowHeight={this.props.windowHeight}>
									<MdToHtml content={post.frontmatter.description} />
								</Description>
							</div>
							{!this.props.isM && (
								<CTAotherProject
									previous={
										previous
											? { slug: previous.fields.slug, text: "Previous Project" }
											: undefined
									}
									next={
										next
											? { slug: next.fields.slug, text: "Next Project" }
											: undefined
									}
								/>
							)}
						</LeftPanelIntro>
					</LeftPanel>
					<MiddlePanel middlePanelOpen={this.state.middlePanelOpen}>
						<MDXRenderer middlePanelOpen={this.state.middlePanelOpen}>
							{post.body}
						</MDXRenderer>
						<MiddlePanelCTAContainer>
							<MiddlePanelCTA
								more
								middlePanelOpen={this.state.middlePanelOpen}
								onClick={() =>
									this.setState(prevState => ({
										middlePanelOpen: !prevState.middlePanelOpen,
									}))
								}
							>
								<img src={PlusIcon} alt="plus icon" />
								<span>See More</span>
							</MiddlePanelCTA>
							<MiddlePanelCTA
								middlePanelOpen={this.state.middlePanelOpen}
								onClick={() =>
									this.setState(prevState => ({
										middlePanelOpen: !prevState.middlePanelOpen,
									}))
								}
							>
								<img src={MinusIcon} alt="minus icon" />
								<span>See Less</span>
							</MiddlePanelCTA>
						</MiddlePanelCTAContainer>
					</MiddlePanel>
					<RightPanel>
						{!this.props.isM && (
							<Cover
								src={post.frontmatter.featuredImage.childImageSharp.fluid}
							/>
						)}
						<OtherInfo
							beginning={post.frontmatter.beginning}
							duration={post.frontmatter.duration}
						/>
					</RightPanel>
				</BlogPostContainer>
			</Layout>
		);
	}
}

export default withWindowDimensions(BlogPostTemplate);

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		mdx(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			body
			frontmatter {
				title
				beginning
				end
				duration
				typeOfProject
				typeOfArticle
				description
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid
						}
					}
				}
				techno
				role
				path
			}
		}
	}
`;
