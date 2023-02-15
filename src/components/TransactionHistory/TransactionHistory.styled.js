import styled from 'styled-components';

export const Table = styled.table`
width: 60vw;
text-align: center;
border: 1px solid gray;
border-collapse: collapse;
background-color: white;
`;
export const TransactionsWraper = styled.section`
text-align:center;`

export const HeaderEl = styled.th`
border: 1px solid ;
color:white;    
background-color: rgba(56, 142, 212, 0.98);
padding:10px 0;
`;
export const BodyRow = styled.tr`
border: 1px solid gray;
:nth-child(even) {
      background-color: rgba(170, 170, 170, 0.19);
    }
`;
export const BodyCell = styled.td`
border: 1px solid gray;
color: gray;
padding:10px 0;
:first-child{
    ::first-letter {
    text-transform:capitalize;
}
}
`;