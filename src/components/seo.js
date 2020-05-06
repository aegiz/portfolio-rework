import Helmet from "react-helmet";
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title, path, cover }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						author
						description
						siteUrl
						defaultImage
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const metaTitle = title || site.siteMetadata.title;
	const metaImage = `${site.siteMetadata.siteUrl}${cover}` || site.siteMetadata.defaultImage;
	const customMeta = [
		{
			name: `description`,
			content: metaDescription,
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
			property: `og:type`,
			content: `website`,
		},
		{
			name: `twitter:card`,
			content: `summary`,
		},
		{
			name: `twitter:creator`,
			content: site.siteMetadata.author,
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
			content: `Featured image, Adrien Rahier Portfolio`,
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
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={customMeta.concat(meta)}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: `Adrien Rahier Portfolio`,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired
};

export default SEO;
