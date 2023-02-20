import PropTypes from 'prop-types';
import { StyledData } from './TransactionStyled';
export default function Transaction(OneTransactionInfo) {
  const { currency, amount, type } = OneTransactionInfo;

  return (
    <tr>
      <StyledData type={type}>{type}</StyledData>
      <StyledData type={type}>{amount}</StyledData>
      <StyledData type={type}>{currency}</StyledData>
    </tr>
  );
}
Transaction.propTypes = {
  OneTransactionInfo: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};
