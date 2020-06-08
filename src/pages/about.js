// Packages
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import CTAhome from "@components/shared/CTAhome";
import Layout from "@components/layout";
import SEO from "@components/seo";

const Content = styled.div`
	position: relative;
`;

export default class AboutPage extends React.Component {
	render() {
		const { data } = this.props;
		const siteTitle = data.site.siteMetadata.title;
		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title="Test" />
				<Content>
					<CTAhome text={"Homepage"} />
					<h1>Hello</h1>
					<p>You just hit a the about page.</p>
				</Content>
			</Layout>
		);
	}
}

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
