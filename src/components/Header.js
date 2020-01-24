import React from "react";
import styled from "styled-components";

const TitleStyle = styled.h2`
color: white;
text-align: center;

`;

const Navstyle = styled.nav`
background: lightblue;
padding: 2%;
`;

const Parastyle = styled.p`
color: white;
`;

const Header = props => {
    return (
        <Navstyle>
            <TitleStyle>Hello, {props.name}: {props.title}</TitleStyle>
            <Parastyle>lorem lorem loremlorem lorem lorem lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, qui minima, omnis pariatur at iste numquam eaque nihil autem illum asperiores. Maxime eum quo doloribus voluptatibus dolores delectus magnam amet?
            </Parastyle>
        </Navstyle>
    )
}


export default Header