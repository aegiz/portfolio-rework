// Packages
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

// Components
import BackHomeCTA from "@components/post/CTA/backHomeCTA";
import Layout from "@components/layout";
import SEO from "@components/seo";

// Utils
import MdToHtml from "@utils/MdToHtml";

// Assets
import Start from "@static/start.png";

const Background = styled.div`
	position: absolute;
	/* z-index:  10; */
	opacity: 0.5;
	width: 100%;
	height: 100%;
	background-image: url("${Start}");
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
	height: 950px;
	height: 100vh;
	/* max-width: 1400px; */
	margin: 0 auto;
`;

const LeftPanel = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 45%;
	height: 100%;
	margin: 0;
	background: ${({ theme }) => theme.colors.white};
	padding: 73px 90px 0;
`;

const LeftPanelInner = styled.div`
	margin-top: 40px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	.upper {
		justify-content: normal;
	}
`;

const Title = styled.h1`
	margin-top: 15px;
	font-size: ${({ theme }) => theme.fontSizes["6xl"]};
`;

const Description = styled.div`
	margin-top: 50px;
	p {
		margin: 0;
		font-size: ${({ theme }) => theme.fontSizes["xl"]};
	}
`;

const OtherProjects = styled.div`
	width: 100%;
	max-width: 350px;
	margin: 0 auto 20px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
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
	a {
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

const RightPanel = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 55%;
	height: 100%;
	margin: 0;
`;

const ProjectPanel = styled.div`
	z-index: 1;
	position: absolute;
	left: calc(45% - 40px);
	bottom: 0;
	width: 31.7%;
	min-height: 425px;
	padding: 25px 50px 0 119px;
	background: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	h2 {
		margin: 48px 0 0 0;
		font-size: ${({ theme }) => theme.fontSizes["2xl"]};
	}
	p {
		margin: 13px 0 0 0;
		font-size: ${({ theme }) => theme.fontSizes["l"]};
	}
`;

const Cover = styled.div`
	width: 100%;
	height: 76.05%;
	.gatsby-image-wrapper {
		height: 100%;
	}
`;

const OtherInfo = styled.div`
	width: 100%;
	height: 23.95%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	background: ${({ theme }) => theme.colors.yellow.light};
`;

const OtherInfoInner = styled.div`
	width: 50%;
	text-align: right;
	padding: 20px;
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
	}
`;

const TypeOfProject = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.normal};
`; // Maybe here use inheritance instead of reapeating myself

const Role = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.normal};
`;

const Date = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.normal};
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
				/>
				<Background />
				<BlogPostContainer>
					<LeftPanel>
						<AniLink
							cover
							bg="#000000"
							top="entry"
							direction="right"
							duration={1}
							to="/"
						>
							<BackHomeCTA />
						</AniLink>
						<LeftPanelInner>
							<div className="upper">
								<Title>{post.frontmatter.title}</Title>
								<Description>
									<MdToHtml content={post.frontmatter.description} />
								</Description>
							</div>
							<OtherProjects>
								{previous && (
									<Projects previous>
										<AniLink
											swipe
											bg="#000000"
											top="entry"
											direction="down"
											duration={1}
											entryOffset={0}
											to={previous.fields.slug}
											rel="previous"
										>
											Previous Project
										</AniLink>
									</Projects>
								)}
								{next && (
									<Projects>
										<AniLink
											swipe
											bg="#000000"
											top="entry"
											direction="up"
											duration={1}
											entryOffset={0}
											to={next.fields.slug}
											rel="next"
										>
											Next Project
										</AniLink>
									</Projects>
								)}
							</OtherProjects>
						</LeftPanelInner>
					</LeftPanel>
					<ProjectPanel>
						<h2>So much swag</h2>
						<p>One line description</p>
						<h2>Coolest activity</h2>
						<p>Playing with his toys</p>
						<MDXRenderer>{post.body}</MDXRenderer>
						<button>Learn more</button>
					</ProjectPanel>
					<RightPanel>
						<Cover>
							<Img
								fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
							/>
						</Cover>
						<OtherInfo>
							<OtherInfoInner>
								<TypeOfProject>
									Project Type: <b>TBC</b>
								</TypeOfProject>
								<Role>
									Role: <b>Solutions Engineer</b>
								</Role>
								<Date>
									{post.frontmatter.beginning} ({post.frontmatter.duration})
								</Date>
							</OtherInfoInner>
						</OtherInfo>
					</RightPanel>
				</BlogPostContainer>
			</Layout>
		);
	}
}

export default BlogPostTemplate;

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
