module.exports = {
	siteMetadata: {
		title: `Adrien Rahier Work`,
		author: `Adrien Rahier`,
		description: `Portfolio of Adrien Rahier.`,
		siteUrl: `https://adrien-rahier-sandbox.netlify.app`,
		twitterUsername: `@AdrienRahier`,
	},
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://adrien-rahier-sandbox.netlify.app`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets/carousel`,
				name: `carousel`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets/illustration`,
				name: `illustration`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				plugins: [`gatsby-remark-images`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: `${__dirname}/content/assets`,
				},
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: [`/example`],
			},
		},
		`gatsby-plugin-transition-link`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Adrien Rahier Work`,
				short_name: `AR-Portfolio`,
				start_url: `/`,
				background_color: `#FFF`,
				theme_color: `#FFCC44`,
				display: `minimal-ui`,
				icon: `static/AR-favicon.svg`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					"@src": "src",
					"@static": "static",
					"@components": "src/components",
					"@pages": "src/pages",
					"@templates": "src/templates",
					"@utils": "src/utils",
					"@blog": "content/blog",
				},
				extensions: ["js"],
			},
		},
	],
};
