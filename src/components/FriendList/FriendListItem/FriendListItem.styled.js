import styled from "styled-components";

export const Item =styled.li`
display: flex;
flex-direction: row;
gap:10px;
align-items:center;
padding: 10px 100px 10px 10px;
border: 2px solid rgb(230,230,230);
border-radius: 5px;
box-shadow: ${props => {
    return props.isOnline ? '5px 5px 4px 0px rgba(124,252,0,0.58)' : '5px 5px 4px 0px rgba(255,51,51,0.58)'
}};;
`
export const OnlineStatus =styled.span`
font-size:20px;
color:${props => {
    return props.isOnline ? 'green' : 'red'
}};
`
export const Avatar =styled.img`
width: 70px;
border-radius: 5px;
`
export const Name =styled.p`
font-size: 20px;
font-weight: 700;
`