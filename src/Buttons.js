import React from 'react'
import styled from 'styled-components'

export const Button = styled.button` 
    background-color: ${props => props.primary?"blue": "black"};
    color:${props => props.primary?"green": "tomato"};
    border-radius: 1em;
    font-size: 2em;
    transition: ease all 0.4s;
    &:hover{
        background-color: green;
    }
    &:focus{
        outline:none;
    }
`; 

export const OtherButton = styled(Button)`
    color:tomato;
`;