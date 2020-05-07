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

const FixedMenu = styled.div`
	display: none;
	${({ theme }) => theme.mediaQueries.m} {
		width: 100%;
		z-index: 3;
		height: 60px;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		background: ${({ theme }) => theme.colors.white};
		padding: 0 70px;
	}
	${({ theme }) => theme.mediaQueries.s} {
		padding: 0 25px;
	}
	${({ theme }) => theme.mediaQueries.xs} {
		padding: 0 10px;
	}
`;

const BlogPostContainer = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
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
		display: none;
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
	padding: 0 90px;
	${({ theme }) => theme.mediaQueries.m} {
		padding: 0 70px;
	}
	${({ theme }) => theme.mediaQueries.s} {
		padding: 0 25px;
	}
	${({ theme }) => theme.mediaQueries.s} {
		padding: 0 10px;
	}
`;

const Title = styled.h1`
	width: 100%;
	mix-blend-mode: exclusion;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["6xl"]};
	${({ theme }) => theme.mediaQueries.l} {
		font-size: ${({ theme }) => theme.fontSizes["5xl"]};
	}
	${({ theme }) => theme.mediaQueries.m} {
		margin-top: 15px;
		word-break: break-all;
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
	position: relative;
	width: 100%;
	height: 100%;
	${({ theme }) => theme.mediaQueries.m} {
		margin: 15px 0;
	}
`;

const DescriptionInner = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	overflow: auto;
	width: 100%;
	height: calc(100% - 50px);
	${({ theme }) => theme.mediaQueries.m} {
		height: 100%;
		position: relative;
	}
	p {
		margin: 0;
		font-size: ${({ theme }) => theme.fontSizes["xl"]};
		${({ theme }) => theme.mediaQueries.l} {
			font-size: ${({ theme }) => theme.fontSizes["normal"]};
		}
	}
`;

const RightPanel = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
	height: 100%;
	width: 55%;
	margin: 0;
	${({ theme }) => theme.mediaQueries.m} {
		display: none;
	}
`;

class BlogPostTemplate extends React.Component {
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
					cover={post.frontmatter.featuredImage.childImageSharp.fluid.src}
				/>
				{this.props.isM && (
					<FixedMenu>
						<CTAhome text={"Homepage"} />
						<CTAotherProject
							mobileDisplay
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
					</FixedMenu>
				)}
				<BlogPostContainer>
					<LeftPanel>
						{!this.props.isM && (
							<LeftPanelTop>
								<CTAhome text={"Homepage"} />
							</LeftPanelTop>
						)}
						<LeftPanelIntro>
							{this.props.isM &&
								post.frontmatter.typeOfArticle === "singlestep" && (
									<MDXRenderer>{post.body}</MDXRenderer>
								)}
							{this.props.isM &&
								post.frontmatter.typeOfArticle === "multistep" && (
									<Cover
										mobileDisplay
										src={post.frontmatter.featuredImage.childImageSharp.fluid}
									/>
								)}

							<Title>{post.frontmatter.title}</Title>
							{this.props.isM && (
								<OtherInfo
									mobileDisplay
									date={post.frontmatter.dateTimeStamp}
									duration={post.frontmatter.duration}
									typeOfProject={post.frontmatter.typeOfProject}
								/>
							)}
							<Description windowHeight={this.props.windowHeight}>
								<DescriptionInner>
									<MdToHtml content={post.frontmatter.description} />
								</DescriptionInner>
							</Description>
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
					{post.frontmatter.typeOfArticle === "multistep" && (
						<MDXRenderer>{post.body}</MDXRenderer>
					)}
					{!this.props.isM && (
						<RightPanel>
							{post.frontmatter.typeOfArticle === "multistep" && (
								<Cover
									src={post.frontmatter.featuredImage.childImageSharp.fluid}
								/>
							)}
							{post.frontmatter.typeOfArticle === "singlestep" && (
								<MDXRenderer>{post.body}</MDXRenderer>
							)}
							<OtherInfo
								date={post.frontmatter.dateTimeStamp}
								duration={post.frontmatter.duration}
								typeOfProject={post.frontmatter.typeOfProject}
								typeOfArticle={post.frontmatter.typeOfArticle}
							/>
						</RightPanel>
					)}
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
				dateTimeStamp
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
