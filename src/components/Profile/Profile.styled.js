import styled from 'styled-components';
export const ProfileCard = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 4px 0px rgba(189,189,189,0.58);
  border: 2px solid rgb(236,236,236);
`;
export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40;
  color: #ebf2fc;
  padding: 15px;
  background-color: white;
`;
export const Avatar = styled.img`
padding: 30px 50px;
max-width: 120px;
border-radius: 50%;
box-shadow:5px 5px 4px 0px rgba(189,189,189,0.58);

`;
export const Name = styled.p`
color: black;
font-size: 20px;
font-weight: 700;
margin-bottom: 10px;
`
export const Tag = styled.p`
color: grey;
font-size: 16px;
font-weight: 500;
margin-bottom: 10px;`

export const Statistic = styled.ul`
display: flex;
border-top: 2px solid rgb(230,230,230);
background-color: rgb(236,240,241);
`
export const StatisticItem = styled.li`

display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 20px 0 20px 0;
  gap: 8px;

:not(:last-child) {
    border-right: 2px solid rgb(230,230,230);

  }
`
export const StatisticItemName = styled.span`
color: grey;
font-size: 12px;
font-weight: 500;
text-align: center;
`
export const StatisticItemAmnt = styled.span`
color: black;
font-size: 16px;
font-weight: 700;

text-align: center;
`