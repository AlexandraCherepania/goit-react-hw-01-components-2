import styled from 'styled-components';
const randomHexColor=function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
export const StatWraper = styled.section`
text-align:center;`
export const Title = styled.h2`
padding:20px 0;
background-color:white;`
export const StatList = styled.ul`
 display: flex;
`
export const StatItem = styled.li`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
width: 100px;
height: 100px;
background-color: ${randomHexColor};
`
export const StatName = styled.span`
font-size: 16px;
color: white;
`
export const StatAmnt = styled.span`
font-size: 24px;
color: white;
`
