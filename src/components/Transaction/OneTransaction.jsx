import PropTypes from 'prop-types';
import { StyledRow, StyledData } from './TransactionStyled';
export default function OneTransaction(OneTransactionInfo) {
  const { currency, amount, type } = OneTransactionInfo;

  return (
    <StyledRow>
      <StyledData type={type}>{type}</StyledData>
      <StyledData type={type}>{amount}</StyledData>
      <StyledData type={type}>{currency}</StyledData>
    </StyledRow>
  );
}
OneTransaction.propTypes = {
  OneTransactionInfo: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};
