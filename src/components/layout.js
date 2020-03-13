//  Packages
import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { Message } from "theme-ui";
import CustomSlickCarousel from "./post/carousel";

// Styles
export const theme = {
	colors: {
		black: "rgba(0, 0, 0, 1)",
		darkGrey: "hsla(0, 0%, 10%, 1)",
		white: "rgba(255, 255, 255, 1)",
		orange: {
			main: "rgba(232, 82, 43, 1)",
			light: "rgb(251, 226, 219)",
		},
	},
	breakpoints: ["40rem", "65rem", "75rem", "85rem"],
	fontSizes: [16, 24, 36, 48, 64, 80],
	space: [0, 4, 8, 16, 32, 64, 128, 192, 256, 384, 512],
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: white;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  };
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato', Arial, sans-serif;
    margin: 0;
  };
  button:focus,
  input:focus {
    outline: 0;
  }
`;

function Layout({ children }) {
	const layoutQuery = graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`;
	const shortcodes = { Message, CustomSlickCarousel };
	const layoutContent = data => (
		<React.Fragment>
			<GlobalStyle />
			<main
				style={{
					background: `white`,
				}}
			>
				<MDXProvider components={shortcodes}>{children}</MDXProvider>
			</main>
		</React.Fragment>
	);

	return (
		<ThemeProvider theme={theme}>
			<StaticQuery query={layoutQuery} render={layoutContent} />
		</ThemeProvider>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
