import Helmet from "react-helmet";
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

// Assets
import defaultImage from "@static/logo_defaultImage.png";

function SEO({ title, description, path, cover }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						author
						description
						siteUrl
						twitterUsername
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const metaTitle = title || site.siteMetadata.title;
	const metaImage = `${site.siteMetadata.siteUrl}${
		cover ? cover : defaultImage
	}`;
	const customMeta = [
		{
			name: `description`,
			content: metaDescription,
		},
		{
			name: `image`,
			content: metaImage,
		},
		{
			property: `og:url`,
			content: site.siteMetadata.siteUrl,
		},
		{
			property: `og:type`,
			content: `website`,
		},
		{
			property: `og:title`,
			content: metaTitle,
		},
		{
			property: `og:description`,
			content: metaDescription,
		},
		{
			property: `og:image`,
			content: metaImage,
		},
		{
			name: `twitter:card`,
			content: `summary_large_image`,
		},
		{
			name: `twitter:creator`,
			content: site.siteMetadata.twitterUsername,
		},
		{
			name: `twitter:title`,
			content: metaTitle,
		},
		{
			name: `twitter:description`,
			content: metaDescription,
		},
		{
			name: `twitter:image`,
			content: metaImage,
		},
		{
			name: `twitter:image:alt`,
			content: `Featured image, Adrien Rahier Work`,
		},
	];
	if (path === "/example") {
		customMeta.push({
			name: `robots`,
			content: `noindex, nofollow`,
		});
	}
	return (
		<Helmet
			htmlAttributes={{ lang: "en" }}
			title={metaTitle}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={customMeta}
		/>
	);
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	path: PropTypes.string,
	cover: PropTypes.string,
};

export default SEO;
