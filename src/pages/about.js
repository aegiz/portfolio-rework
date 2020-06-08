import React from "react";
import { graphql } from "gatsby";

import Layout from "@components/layout";
import SEO from "@components/seo";

class aboutPage extends React.Component {
	render() {
		const { data } = this.props;
		const siteTitle = data.site.siteMetadata.title;
		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title="Test" />
				<h1>Hello</h1>
				<p>You just hit a the about page.</p>
			</Layout>
		);
	}
}

export default aboutPage;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
