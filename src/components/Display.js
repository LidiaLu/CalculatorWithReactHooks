import React from 'react'
import styled from "styled-components"

const Display = () => {
    return (
        <DisplayWrapper>this is display</DisplayWrapper>)
}

export default Display

export const DisplayWrapper = styled.p`
margin: 0;
height: 80px;
padding:20px;
background: navy;
text-align: right;
color: white;
font-family: 'Turret Road';
font-size: 1.3rem;
letter-spacing: 1px;
`;

