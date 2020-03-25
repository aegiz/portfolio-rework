//  Packages
import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { Message } from "theme-ui";
import CustomSlickCarousel from "./post/carousel/custom-carousel";

// Styles: Theme
export const theme = {
	fonts: {
		merri: "Merriweather, Open Sans, Helvetica, Arial, sans-serif",
		open: "Open Sans, Helvetica, Arial, sans-serif",
		lato: "Lato, Helvetica, Arial, sans-serif",
		mono: "Helvetica, Arial, sans-serif",
	},
	colors: {
		black: "rgba(0, 0, 0, 1)",
		darkGrey: "hsla(0, 0%, 10%, 1)",
		white: "rgba(255, 255, 255, 1)",
		orange: {
			main: "rgba(232, 82, 43, 1)",
			light: "rgb(251, 226, 219)",
		},
	},
	breakpoints: {
		xs: 480,
		s: 767,
		m: 979,
		l: 1200,
		xl: 1650,
	},
	fontWeights: {
		hairline: "100",
		thin: "200",
		light: "300",
		normal: "400",
		medium: "500",
		semibold: "600",
		bold: "700",
		extrabold: "800",
		black: "900",
	},
	fontSizes: {
		xs: "0.5rem",
		s: "0.75rem",
		m: "0.875rem",
		normal: "1rem",
		l: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "4rem",
	},

	mediaQueries: {
		xs: "@media only screen and (max-width: 480px)",
		s: "@media only screen and (max-width: 767px)",
		m: "@media only screen and (max-width: 979px)",
		l: "@media only screen and (max-width: 1200px)",
		xl: "@media only screen and (max-width: 1650px)",
	},
};

// Styles: Reset and Global
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: white;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.merri};
    font-size: ${({ theme }) => theme.fontSizes.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  };
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.lato};
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
		<>
			<GlobalStyle />
			<main
				style={{
					background: `white`,
				}}
			>
				<MDXProvider components={shortcodes}>{children}</MDXProvider>
			</main>
		</>
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
