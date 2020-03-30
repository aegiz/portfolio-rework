// Package
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
	background: ${({ theme }) => theme.colors.black};
`;

const InnerContainer = styled.div`
	padding: 30px 20px;
	color: ${({ theme }) => theme.colors.white};
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
`;

export default class footer extends React.Component {
	render() {
		return (
			<>
				<MainContainer>
					<InnerContainer>This is the footer</InnerContainer>
				</MainContainer>
			</>
		);
	}
}
