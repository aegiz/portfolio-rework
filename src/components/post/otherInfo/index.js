// Package
import React, { Component } from "react";

// Styles
import styled from "styled-components";

const OtherInfo = styled.div`
	width: 100%;
	height: 23.95%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	background: ${({ theme }) => theme.colors.yellow.light};
`;

const OtherInfoInner = styled.div`
	width: 50%;
	text-align: right;
	padding: 20px;
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
	}
`;

const TypeOfProject = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.normal};
`; // Maybe here use inheritance instead of reapeating myself

const Role = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.normal};
`;

const Date = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.normal};
`;

export default class OtherInfoComp extends Component {
	render() {
		return (
			<OtherInfo>
				<OtherInfoInner>
					<TypeOfProject>
						Project Type: <b>TBC</b>
					</TypeOfProject>
					<Role>
						Role: <b>Solutions Engineer</b>
					</Role>
					<Date>
						{this.props.beginning} ({this.props.duration})
					</Date>
				</OtherInfoInner>
			</OtherInfo>
		);
	}
}
