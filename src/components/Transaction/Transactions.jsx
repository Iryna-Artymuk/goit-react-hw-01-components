import PropTypes from 'prop-types';
import OneTransaction from './OneTransaction';
import { StyledRow, Tbody, StyledHead, StyledTable } from './TransactionStyled';
import { StyledWrapper } from '../Common/CommonStyle';
export default function Transactions({ transactionsData }) {
  return (
    <StyledWrapper>
      <StyledTable>
        <thead>
          <StyledRow>
            <StyledHead>Type</StyledHead>
            <StyledHead>Amount</StyledHead>
            <StyledHead>Currency</StyledHead>
          </StyledRow>
        </thead>
        <Tbody>
          {transactionsData.map(info => (
            <OneTransaction
              key={info.id}
              type={info.type}
              amount={info.amount}
              currency={info.currency}
            ></OneTransaction>
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
