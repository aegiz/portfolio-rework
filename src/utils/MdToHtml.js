/* At this stage it's not possible to convert a Markdown field to Html automatically
 * So we will just use showdown to convert the content into HTML
 * See https://github.com/gatsbyjs/gatsby/issues/5021 for more info
 */
import React from "react";
import PropTypes from "prop-types";
import showdown from "showdown";

const converter = new showdown.Converter();

const MarkdownContent = ({ content, className }) => (
	<div
		className={className}
		dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
	/>
);

MarkdownContent.propTypes = {
	content: PropTypes.string,
	className: PropTypes.string,
};

export default MarkdownContent;
