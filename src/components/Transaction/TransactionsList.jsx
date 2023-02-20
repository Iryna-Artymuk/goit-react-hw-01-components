import PropTypes from 'prop-types';
import Transaction from './TransactionItem';
import { Thead, Tbody, StyledHead, StyledTable } from './TransactionStyled';
import { StyledWrapper } from '../Layout/Layout.styled';
export default function Transactions({ transactionsData }) {
  return (
    <StyledWrapper>
      <StyledTable>
        <Thead>
          <tr>
            <StyledHead>Type</StyledHead>
            <StyledHead>Amount</StyledHead>
            <StyledHead>Currency</StyledHead>
          </tr>
        </Thead>
        <Tbody>
          {transactionsData.map(info => (
            <Transaction
              key={info.id}
              type={info.type}
              amount={info.amount}
              currency={info.currency}
            ></Transaction>
          ))}
        </Tbody>
      </StyledTable>
    </StyledWrapper>
  );
}
Transactions.propTypes = {
  transactionsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ).isRequired,
};
