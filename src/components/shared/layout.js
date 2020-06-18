//  Packages
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { Message } from "theme-ui";
import { StaticQuery, graphql } from "gatsby";

// Components
import MiddleColumn from "@components/post/middleColumn";
import SlideShow from "@components/post/slideshow";

// Styles: Theme
export const theme = {
	fonts: {
		ibm: "IBM Plex Sans, Open Sans, Helvetica, Arial, sans-serif",
		pop: "Poppins, Arial, Tahoma, sans-serif",
		open: "Open Sans, Helvetica, Arial, sans-serif",
		lato: "Lato, Helvetica, Arial, sans-serif",
		mono: "Helvetica, Arial, sans-serif",
	},
	colors: {
		white: "#FFF",
		black: "#000",
		grey: {
			light: "#CCC",
			main: "#888",
			middle: "#222",
			dark: "#111",
		},
		yellow: {
			main: "#FC4",
			light: "#FD8",
			dark: "#CA2",
		},
	},
	breakpoints: {
		xxs: 305,
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
		"2xl": "1.7rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "5rem",
		"7xl": "8rem",
		"8xl": "10rem",
		"9xl": "12rem",
		"10xl": "15rem",
	},

	mediaQueries: {
		xxs: "@media only screen and (max-width: 305px)",
		xs: "@media only screen and (max-width: 480px)",
		s: "@media only screen and (max-width: 767px)",
		m: "@media only screen and (max-width: 979px)",
		l: "@media only screen and (max-width: 1200px)",
		xl: "@media only screen and (max-width: 1650px)",
	},
};

// Styles: Reset and Global
const GlobalStyle = createGlobalStyle`
	*, *:before, *:after {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		background: white;
		font-family: ${({ theme }) => theme.fonts.pop};
		font-size: ${({ theme }) => theme.fontSizes.normal};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	h1,	h2,	h3,	h4,	h5,	h6 {
		font-family: ${({ theme }) => theme.fonts.ibm};
		margin: 0;
	}
	button:focus,
	input:focus {
		outline: 0;
	}
	button {
		cursor: pointer;
		background: transparent;
		border: none;
	}
`;

// Styles: Style Component
const Main = styled.main`
	min-height: 100vh;
	background: ${props =>
		props.background ? props.background : theme.colors.white};
`;

function Layout({ background, children }) {
	const layoutQuery = graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`;
	const shortcodes = { Message, MiddleColumn, SlideShow };
	const layoutContent = data => (
		<>
			<GlobalStyle />
			<Main background={background}>
				<MDXProvider components={shortcodes}>{children}</MDXProvider>
			</Main>
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
