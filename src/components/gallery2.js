import React from "react";
import { Link, graphql } from "gatsby";
import { withTheme } from "styled-components";
import Masonry from "react-masonry-component";

const masonryOptions = {
	transitionDuration: 0,
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

function Gallery({ posts }) {
	const childElements = posts.map(({ node }) => {
		const title = node.frontmatter.title || node.fields.slug;
		return (
			<li className="my-bg-image-el" key={node.fields.slug}>
				<h3>
					<Link style={{ boxShadow: `none` }} to={node.fields.slug}>
						{title}
					</Link>
				</h3>
				<small>{node.frontmatter.date}</small>
				<p
					dangerouslySetInnerHTML={{
						__html: node.frontmatter.description || node.excerpt,
					}}
				/>
			</li>
		);
	});

	return (
		<Masonry
			className={"my-Project-class"} // default ''
			elementType={"ul"} // default 'div'
			options={masonryOptions} // default {}
			disableImagesLoaded={false} // default false
			updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
			imagesLoadedOptions={imagesLoadedOptions} // default {}
		>
			{childElements}
		</Masonry>
	);
}

export default withTheme(Gallery);
