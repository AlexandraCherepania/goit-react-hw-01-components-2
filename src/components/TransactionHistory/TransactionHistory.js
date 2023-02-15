import PropTypes from "prop-types";
import { Table, HeaderEl, BodyRow, BodyCell } from "./TransactionHistory.styled";


export const TransactionHistory = ({ items }) => {
  return (<Table>
    <thead>
      <tr>
        <HeaderEl>Type</HeaderEl>
        <HeaderEl>Amount</HeaderEl>
        <HeaderEl>Currency</HeaderEl>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <BodyRow key={item.id}>
          <BodyCell>{item.type}</BodyCell>
          <BodyCell>{item.amount}</BodyCell>
          <BodyCell>{item.currency}</BodyCell>
        </BodyRow>
      )

      )}
    </tbody>
  </Table>)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}